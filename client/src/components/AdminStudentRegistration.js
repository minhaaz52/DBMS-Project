import React,{useState,useEffect} from 'react'
import Header2 from "./Header2";
import Axios from "axios";
import { useParams } from 'react-router';
import "./Style.css";

function AdminStudentRegistration() {
    const {adminid,departid}=useParams();

    const [stuid,setStuid]=useState("");
    const [roll,setRoll]=useState("");
    const [enroll,setEnroll]=useState("");
    const [course,setCourse]=useState("btech");
    const [branch,setBranch]=useState("ce");
    const [sem,setSem]=useState(1);
    const [name,setName]=useState("");
    const [fname,setFname]=useState("");
    const [mname,setMname]=useState("");
    const [mob,setMob]=useState("");
    const [dob,setDob]=useState("");
    const [reg,setReg]=useState("no");
    const [per5,setPer5]=useState(true);
    const [arr,setArr]=useState([]);

    useEffect(()=>{
        Axios.get("http://localhost:4000/api/admin/student/login/get").then(res=>setArr(res.data));
    },[]);

    const Submitted=(e)=>{
        e.preventDefault();

        if (idVerification(stuid)){
            for (const char of arr){
                if (char.studentId==stuid){
                    return alert("User already Exist");
                }
            }

            if (numberVerification(mob)){
                const confirm=window.confirm("Do you want to submit the form?");
                if (confirm){
                    console.log(name);
                    const url=`http://localhost:4000/api/admin=${adminid}/student/registration`;

                    Axios.post(url,{studentId:stuid,rollNo:roll,enrollmentNo:enroll,course:course,branch:branch, deptId:deptId,semester:sem,isRegistered:reg,mobileNo:mob,name:name,dob:dob,fatherName:fname,motherName:mname}).then(
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
        alert("Invalid Student ID");
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
    
    const deptId=departmentId[branch];

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

                                {/* Student Id & Roll No */}

                    <div className="form2">
                        <div className="co">
                            <label className="la">Student ID :</label>
                            <input type="text" name="stuid" value={stuid} onChange={(e)=>setStuid(e.target.value)} placeholder="Student ID" autoFocus required={per5}/>
                        </div>

                        <div className="co">
                            <label className="la">Roll No :</label>
                            <input type="text" name="roll" value={roll} onChange={(e)=>setRoll(e.target.value)} placeholder="Roll No" required={per5}/>
                        </div>
                    </div>

                                {/* Enrollment No & Course */}

                    <div className="form2">
                        <div className="co">
                            <label className="la">Enrollment No :</label>
                            <input type="text" name="enroll" value={enroll} onChange={(e)=>setEnroll(e.target.value)} placeholder="Enrollment No" required={per5}/>
                        </div>

                        <div className="co">
                            <label className="la">Course :</label>
                            <select name="course" value={course} onChange={(e)=>setCourse(e.target.value)} className="se" required={per5}>
                                <option value="btech">B.Tech</option>
                                <option value="mtech">M.Tech</option>
                            </select>
                        </div>
                    </div>

                                {/* Branch & Semester */}

                    <div className="form2">
                        <div className="co">
                            <label className="la">Branch :</label>
                            <select name="branch" value={branch} onChange={(e)=>setBranch(e.target.value)} className="se" required={per5}>
                            <option value="ce">Civil</option>
                                <option value="cse">Computer</option>
                                <option value="ee">Electrical</option>
                                <option value="ece">Electronics & Communication</option>
                                <option value="me">Mechanical</option>
                            </select>
                        </div>

                        <div className="co">
                            <label className="la">Semester :</label>
                            <select name="sem" value={sem} onChange={(e)=>setSem(e.target.value)} className="se" required={per5} required={per5}>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                            </select>
                        </div>
                    </div>

                                {/* IsRegistered */}

                    <div className="form2">
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
