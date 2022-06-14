import React,{useState,useEffect} from 'react'
import {useParams} from "react-router"
import Axios from "axios";
import Header2 from "./Header2";
import {NavLink} from "react-router-dom";

function StudentList() {

    const {adminid,departid}=useParams();

    const [arr,setArr]=useState([]);
    const [arr2,setArr2]=useState([]);
    
    const departmentId={
        1:"Civil",
        2:"Computer Science",
        3:"Electrical",
        4:"Electronics & Communication",
        5:"Mechanical"
    }

    const course={
        btech:"B.Tech",
        mtech: "M.Tech"
    }

    useEffect(()=>{
        const url=`http://localhost:4000/api/admin/login/student/get/${departid}`
        const url2="http://localhost:4000/api/admin/student/login/get"
        Axios.get(url).then(res=>setArr(res.data));
        Axios.get(url2).then(res=>setArr2(res.data));
    },[])

    const Delete=(id)=>{
        const confirm=window.confirm("Are you sure, You want to delete the Accout?");
        if (confirm){
            const url=`http://localhost:4000/api/admin/student/delete/${id}`

            Axios.delete(url).then(
                alert("Accout has been successfully deleted"),
                window.location.reload()
            )
        }
    }



    var list;
    list=arr.map(val=>{
        return <>
            <tr>
            <td><NavLink to={`/deptId=${departid}/admin=${adminid}/student=${val.studentId}/loggedin`} target="_blank" style={{textDecoration:"none"}}>{val.studentId}</NavLink></td>
            <td>{val.name}</td>
            <td>{course[val.course]}</td>
            <td>{val.semester}</td>
            <td>{val.fatherName}</td>
            <td>{val.motherName}</td>
            <td><button style={{fontSize:15, cursor:"pointer"}} onClick={()=>{Delete(val.studentId)}}>Delete</button></td>
            </tr>
        </>
    })

    return (
        <div className="App2">
            <Header2 back={`/admin/login/deptId=${departid}/adminId=${adminid}`}/>
            <h1 style={{color:"yellow", fontFamily:"times new roman"}}>{departmentId[departid]} Department</h1>
            <h1 style={{color:"white", textDecoration:"underline"}}>STUDENT LIST</h1>
            <h2 style={{textAlign:"left", marginLeft:30, color:"white"}}>Total Students : <span style={{color:"yellow"}}>{arr2.length}</span></h2>
            <h2 style={{textAlign:"left", marginLeft:30, color:"white"}}>{departmentId[departid]} : <span style={{color:"yellow"}}>{arr.length}</span></h2>
            <table className="table2" border="2">
                <tr>
                    <td>Student Id</td>
                    <td>Name</td>
                    <td>Course</td>
                    <td>Semester</td>
                    <td>Father Name</td>
                    <td>Mother Name</td>
                    <td>Delete</td>
                </tr>
                {list}
            </table>
            <div style={{height:50}}/>
        </div>
    )
}

export default StudentList
