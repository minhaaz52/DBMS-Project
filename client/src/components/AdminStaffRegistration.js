import React,{useState,useEffect} from 'react'
import Header2 from "./Header2";
import Axios from "axios";
import { useParams } from 'react-router';
import "./Style.css";

function AdminStudentRegistration() {
    const {adminid,departid}=useParams();

    const [staffId,setStaffid]=useState("");
    const [department,setDepartment]=useState("ce");
    const [post,setPost]=useState("prof");
    const [dateOfJoin,setDateofjoin]=useState("");
    const [salary,setSalary]=useState("");
    const [name,setName]=useState("");
    const [fname,setFname]=useState("");
    const [mname,setMname]=useState("");
    const [mob,setMob]=useState("");
    const [dob,setDob]=useState("");
    const [reg,setReg]=useState("no");
    const [per5,setPer5]=useState(true);
    const [arr,setArr]=useState([]);

    useEffect(()=>{
        Axios.get("http://localhost:4000/api/admin/staff/login/get").then(res=>setArr(res.data));
    },[]);

    const Submitted=(e)=>{
        e.preventDefault();

        if (idVerification(staffId)){        
            for (const char of arr){
                if (char.staffId==staffId){
                    return alert("User already Exist");
                }
            }

            if (numberVerification(mob)){

                const confirm=window.confirm("Do you want to submit the form?");
                if (confirm){

                    const url=`http://localhost:4000/api/admin=${adminid}/staff/registration`;

                    Axios.post(url,{staffId:staffId, department:department, post:post, dateOfJoin:dateOfJoin, salary:salary, deptId:deptId, isRegistered:reg,mobileNo:mob,name:name,dob:dob,fatherName:fname,motherName:mname}).then(
                        alert("Your response has been successfully submitted"),
                        window.location.reload()
                    )
                }
            }
        }
    }

    const idVerification=(id)=>{
        if (/^\d+$/.test(id)){
            return true;
        }
        alert("Invalid Staff ID");
        return false;
    }

    const numberVerification=(mob)=>{
        if (/^\d{10}$/.test(mob)){
            return true;
        }
        alert("Invalid Mobile No");
        return false
    }

    const Exit=()=>{
        const confirm=window.confirm("Are you sure you want to Exit?");
        if (confirm){
            window.location.replace(`/admin/login/deptId=${departid}/adminId=${adminid}`);
        }
    }

    const departmentId={
        "ce":1,
        "cse":2,
        "ee":3,
        "ece":4,
        "me":5
    }
    
    const deptId=departmentId[department];

    return (
        <div>
            <Header2 back={`/admin/login/deptId=${departid}/adminId=${adminid}`}/>
            <div className="h">
                <h4 className="ma">* All fields are mandatory</h4>
                <div className="btn3">
                    <button onClick={Exit} className="b3">Exit</button>
                </div>
            </div>
            <div className="form3 App2">
                
                <form onSubmit={(e)=>Submitted(e)}>

                                {/* ACADEMIC DETAILS */}

                    <div className="divider">
                        <h3>ACADEMIC DETAILS</h3>
                    </div>

                                {/* Staff Id & Department */}

                    <div className="form2">
                        <div className="co">
                            <label className="la">Staff ID :</label>
                            <input type="text" name="staffId" value={staffId} onChange={(e)=>setStaffid(e.target.value)} placeholder="Staff ID" autoFocus required={per5}/>
                        </div>

                        <div className="co">
                            <label className="la">Department :</label>
                            <select name="deptName" value={department} onChange={(e)=>setDepartment(e.target.value)} className="se" required={per5}>
                                <option value="ce">Civil</option>
                                <option value="cse">Computer</option>
                                <option value="ee">Electrical</option>
                                <option value="ece">Electronics & Communication</option>
                                <option value="me">Mechanical</option>
                            </select>
                        </div>
                    </div>

                                {/* Post & DateOfJoin */}

                    <div className="form2">
                        <div className="co">
                            <label className="la">Post :</label>
                            <select name="post" value={post} onChange={(e)=>setPost(e.target.value)} className="se" required={per5}>
                                <option value="prof">Professor</option>
                                <option value="assprof">Assistant Professor</option>
                                <option value="intern">Intern</option>
                            </select>
                        </div>

                        <div className="co">
                            <label className="la">Date of Joining :</label>
                            <input type="date" name="dateOfJoin" value={dateOfJoin} onChange={(e)=>setDateofjoin(e.target.value)} placeholder="Date of Joining" required={per5}/>
                        </div>
                    </div>

                                {/* Salary & IsRegistered */}

                    <div className="form2">
                        <div className="co">
                            <label className="la">Salary :</label>
                            <input type="text" name="salary" value={salary} onChange={(e)=>setSalary(e.target.value)} placeholder="Salary" required={per5}/>
                        </div>

                        <div className="co">
                            <label className="la">IsRegistered :</label>
                            <select value={reg} onChange={(e)=>setReg(e.target.value)} className="se" required={per5}>
                                <option value="yes">yes</option>
                                <option value="no">no</option>
                            </select>
                        </div>
                    </div>

                                {/* PERSONAL DETAILS */}

                    <div className="divider">
                        <h3>PERSONAL DETAILS</h3>
                    </div>

                                {/* Name & DOB */}

                    <div className="form2">
                        <div className="co">
                            <label className="la">Name :</label>
                            <input type="text" name="name" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Name" required={per5}/>
                        </div>

                        <div className="co">
                            <label className="la">DOB :</label>
                            <input type="date" name="dob" value={dob} onChange={(e)=>setDob(e.target.value)} placeholder="DOB" required={per5}/>
                        </div>
                    </div>

                                {/* Father Name & Mother Name */}

                    <div className="form2">
                        <div className="co">
                            <label className="la">Father's Name :</label>
                            <input type="text" name="fname" value={fname} onChange={(e)=>setFname(e.target.value)} placeholder="Name" required={per5}/>
                        </div>

                        <div className="co">
                            <label className="la">Mother's Name :</label>
                            <input type="text" name="mname" value={mname} onChange={(e)=>setMname(e.target.value)} placeholder="Name" required={per5}/>
                        </div>
                    </div>

                                {/* Mobile No */}

                    <div className="form2">
                        <div className="co">
                            <label className="la">Mobile No :</label>
                            <input type="text" name="mob" value={mob} onChange={(e)=>setMob(e.target.value)} placeholder="Mobile No" required={per5}/>
                        </div>
                    </div>

                    <div className="btn3">
                        <button type="submit" className="su">Submit</button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default AdminStudentRegistration
