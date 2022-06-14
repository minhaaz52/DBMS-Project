import React,{useState} from 'react'
import { useParams } from 'react-router'
import Header2 from "./Header2";
import "./Style.css";
import Axios from "axios";
import { NavLink } from 'react-router-dom';

function AdminLoggedIn() {
    
    const {adminid,departid}=useParams();

    const [stuId,setStuid]=useState("")
    const [staffId,setStaffid]=useState("");
    const [name,setName]=useState("STUDENT");
    const [flag,setFlag]=useState(true);
    
    const li=`/admin/login/deptId=${departid}/adminId=${adminid}/studentlist`;
    const li2=`/admin/login/deptId=${departid}/adminId=${adminid}/stafflist`;
    
    const departmentId={
        1:"Civil",
        2:"Computer Science",
        3:"Electrical",
        4:"Electronics & Communication",
        5:"Mechanical"
    }

    const SubmitStudent=(e)=>{
        e.preventDefault();
        Axios.get("http://localhost:4000/api/admin/student/login/get").then(res=>{
            for (const char of res.data){
                if (char.studentId==stuId){
                    if (char.deptId==departid){
                        return window.location.replace(`/deptId=${departid}/admin=${adminid}/student=${char.studentId}/loggedin`);
                    }
                    else{
                        clearTimeout(timeout);
                        return alert(`Student belongs to ${departmentId[char.deptId]} department`);
                    }
                }
            }
            clearTimeout(timeout);
            return alert("Invalid Student ID");
        });

        const timeout=setTimeout(()=>{
            alert("Connection Time Out. Try again");
        },5000);
    }

    const SubmitStaff=(e)=>{
        e.preventDefault();
        Axios.get("http://localhost:4000/api/admin/staff/login/get").then(res=>{
            for (const char of res.data){
                if (char.staffId==staffId){
                    if (char.deptId==departid){
                        return window.location.replace(`/deptId=${departid}/admin=${adminid}/staff=${char.staffId}/loggedin`);
                    }
                    else{
                        clearTimeout(timeout);
                        return alert(`Staff belongs to ${departmentId[char.deptId]} department`);
                    }
                }
            }
            clearTimeout(timeout);
            return alert("Invalid Staff ID");
        });

        const timeout=setTimeout(()=>{
            alert("Connection Time Out. Try again");
        },5000);
    }

    const Logout=()=>{
        const confirm=window.confirm("Are you sure you want to logout?");
        if(confirm==true){
            window.location.replace("/admin");
        }

    }

    const changed=(e)=>{
        if (e.target.value=="staff"){
            setName("STAFF")
            setFlag(false);
            setStuid("");
        }
        else{
            setName("STUDENT")
            setFlag(true);
            setStaffid("");
        }
    }

    var inp;
    if (flag){
        inp=(
            <form onSubmit={(e)=>SubmitStudent(e)}>
                <input type="text" name="stuid" placeholder="Student ID" value={stuId} onChange={(e)=>setStuid(e.target.value)} style={{height:30, width:200}} required/>

                <div style={{height:25}}/>
                <button type="submit" className="b3 b5 b8">Search</button>
                
                <div style={{height:25}}/>
                <NavLink to={`/deptId=${departid}/admin=${adminid}/student/registration`}><button className="b5 b3" style={{marginBottom:25}} >Registration</button></NavLink>
            </form>
        )
    }

    else{
        inp=(
            <form onSubmit={(e)=>SubmitStaff(e)}>
                <input type="text" name="staffid" placeholder="Staff ID" value={staffId} onChange={(e)=>setStaffid(e.target.value)} style={{height:30, width:200}} required/>

                <div style={{height:25}}/>
                <button type="submit" className="b3 b5 b8">Search</button>

                <div style={{height:25}}/>
                <NavLink to={`/deptId=${departid}/admin=${adminid}/staff/registration`}><button className="b5 b3" style={{marginBottom:25}} >Registration</button></NavLink>
            </form>
        )
    }

    return (
        <div className="App2">
            <Header2 back="/admin"/>
            <h1 style={{color:"yellow", fontFamily:"times new roman"}}>{departmentId[departid]} Department</h1>
            <div className="btn3">
                <button onClick={Logout} className="b3">Logout</button>
                <NavLink to={flag?li:li2} target="_blank"><button className="b3" style={{backgroundColor:"brown", borderColor:"brown"}}>Show All</button></NavLink>
            </div>


            <div className="forms">
                <div style={{height:15}}/>
                <input type="radio" name="log" value="student" id="student" style={{marginRight:10}} defaultChecked onChange={(e)=>changed(e)}/>
                <label for="student">Student</label>
                <input type="radio" name="log" value="staff" id="staff" style={{marginLeft:50, marginRight:10}} onChange={(e)=>changed(e)}/>
                <label for="staff">Staff</label>

                <h1 className="dec" style={{fontSize:30, color:"green"}}>{name}</h1>

                {inp}
            </div>
            <div style={{height:75}}/>
        </div>
    )
}

export default AdminLoggedIn;