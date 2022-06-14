import React,{useState,useEffect} from 'react'
import {useParams} from "react-router"
import Axios from "axios";
import Header2 from "./Header2";
import {NavLink} from "react-router-dom";

function StaffList() {

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

    const post={
        prof:"Professor",
        assprof:"Assistant Professor",
        intern:"Intern"
    }

    useEffect(()=>{
        const url=`http://localhost:4000/api/admin/login/staff/get/${departid}`
        const url2="http://localhost:4000/api/admin/staff/login/get"
        Axios.get(url).then(res=>setArr(res.data))
        Axios.get(url2).then(res=>setArr2(res.data));
    },[])

    const Delete=(id)=>{
        const confirm=window.confirm("Are you sure, You want to delete the Accout?");
        if (confirm){
            const url=`http://localhost:4000/api/admin/staff/delete/${id}`

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
            <td><NavLink to={`/deptId=${departid}/admin=${adminid}/staff=${val.staffId}/loggedin`} target="_blank" style={{textDecoration:"none"}}>{val.staffId}</NavLink></td>
            <td>{val.name}</td>
            <td>{val.dateOfJoin}</td>
            <td>{post[val.post]}</td>
            <td>{val.fatherName}</td>
            <td>{val.motherName}</td>
            <td><button style={{fontSize:15, cursor:"pointer"}} onClick={()=>{Delete(val.staffId)}}>Delete</button></td>
            </tr>
        </>
    })

    return (
        <div className="App2">
            <Header2 back={`/admin/login/deptId=${departid}/adminId=${adminid}`}/>
            <h1 style={{color:"yellow", fontFamily:"times new roman"}}>{departmentId[departid]} Department</h1>
            <h1 style={{color:"white", textDecoration:"underline"}}>STAFF LIST</h1>
            <h2 style={{textAlign:"left", marginLeft:30, color:"white"}}>Total Staff : <span style={{color:"yellow"}}>{arr2.length}</span></h2>
            <h2 style={{textAlign:"left", marginLeft:30, color:"white"}}>{departmentId[departid]} : <span style={{color:"yellow"}}>{arr.length}</span></h2>
            <table className="table2" border="2">
                <tr>
                    <td>Staff Id</td>
                    <td>Name</td>
                    <td>Date Of Join</td>
                    <td>Post</td>
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

export default StaffList
