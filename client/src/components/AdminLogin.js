import React, {useState} from 'react'
import {NavLink} from "react-router-dom";
import "./Style.css";
import Header from "./Header";
import Axios from "axios";

function AdminLogin(props){
    const [mail,setMail]=useState("");
    const [pswd,setPswd]=useState("");
    const [id,setId]=useState("");
    const [flag,setFlag]=useState(true);
    
    const submitted=(e)=>{
        e.preventDefault();
        const url="http://localhost:4000/api/admin/login/get";
        Axios.get(url).then(res=>{
            for (const char of res.data){
                if (char.email==e.target.email.value){
                    if (char.pswd==e.target.password.value && char.isRegistered=="yes"){
                        const adminId=char.staffId;
                        return window.location.replace(`/admin/login/deptId=${char.deptId}/adminId=${adminId}`);
                    }
                }
            }
            clearTimeout(timeout);
            return alert("Invalid email or password");
        })
        
        const timeout=setTimeout(()=>{
            alert("Connection Time Out. Try again");
        },5000);
    }

    const submittedId=(e)=>{
        e.preventDefault();
        const url="http://localhost:4000/api/admin/login/get";
        Axios.get(url).then(res=>{
            for (const char of res.data){
                if (char.staffId==id){
                    if (char.pswd==e.target.password.value && char.isRegistered=="yes"){
                        const adminId=char.staffId;
                        return window.location.replace(`/admin/login/deptId=${char.deptId}/adminId=${adminId}`);
                    }
                }
            }
            clearTimeout(timeout);
            return alert("Invalid Admin Id or password");
        })
        
        const timeout=setTimeout(()=>{
            alert("Connection Time Out. Try again");
        },5000);
    }

    const changed=(e)=>{
        if (e.target.value=="adminId"){
            setFlag(false);
            setMail("");
        }
        else{
            setFlag(true);
            setId("");
        }
        setPswd("");
    }

    var inp;
    if (flag){
        inp=(
            <form onSubmit={(e)=>submitted(e)}>
                <input type="email" placeholder="Email" name="email" style={{height:30, width:200}} value={mail} onChange={(e)=>setMail(e.target.value)} required autoFocus/>
                <div style={{height:25}}/>
                <input type="password" placeholder="Password" name="password" style={{height:30, width:200}} value={pswd} onChange={(e)=>setPswd(e.target.value)} required/>
                
                <div style={{height:25}}/>
                <button type="submit" className="b3 b5 b8" style={{marginBottom:25}}>Login</button>
            </form>
        )
    }
  
    else{
        inp=(
            <form onSubmit={(e)=>submittedId(e)}>
                <input type="text" placeholder="Admin Id" name="id" style={{height:30, width:200}} value={id} onChange={(e)=>setId(e.target.value)} required autoFocus/>
                <div style={{height:25}}/>
                <input type="password" placeholder="Password" name="password" style={{height:30, width:200}} value={pswd} onChange={(e)=>setPswd(e.target.value)} required/>
                
                <div style={{height:25}}/>
                <button type="submit" className="b3 b5 b8" style={{marginBottom:25}}>Login</button>
            </form>
        )
    }

    return (
        <div >
            <Header/>
            <div style={{height:75}}/>

            <div className="forms">
                <div style={{height:25,color:"green", fontSize:12}}>
                    <h1 className="dec">ADMIN LOGIN</h1>
                </div>
                <div style={{height:15}}/>

                <input type="radio" name="log" value="email" id="mail" style={{marginRight:10}} onChange={(e)=>changed(e)} defaultChecked/>
                <label for="mail">Email</label>
                <input type="radio" name="log" value="adminId" id="adminid" style={{marginLeft:50, marginRight:10}} onChange={(e)=>changed(e)}/>
                <label for="adminid">Admin Id</label>
                <div style={{height:15}}/>

                {inp}
            </div>
        </div>
    )
}

export default AdminLogin;