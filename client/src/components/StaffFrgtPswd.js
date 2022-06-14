import React,{useState,useEffect} from 'react';
import {NavLink} from "react-router-dom";
import Axios from "axios";
import Header2 from "./Header2";

function StaffFrgtPswd(){

    const [email,setEmail]=useState("");
    const [arr,setArr]=useState("");
    const [id,setId]=useState("");
    const [flag,setFlag]=useState(true);

    useEffect(()=>{
        const url="http://localhost:4000/api/staff/login/get";
        Axios.get(url).then(res=>setArr(res.data));
    },[])

    const submitted=(e)=>{
        e.preventDefault();
        for (const char of arr){
            if (char.email==email && char.isRegistered=="yes"){
                const url="http://localhost:4000/api/forgetpassword";
                return Axios.post(url,{names:"Staff Id",id:char.staffId,email:email,password:char.pswd}).then(window.location.replace("/staff/mailsent"));
            }
        }
        return alert("Invalid Email")
    }

    const submittedId=(e)=>{
        e.preventDefault();
        for (const char of arr){
            if (char.staffId==id && char.isRegistered=="yes"){
                const url="http://localhost:4000/api/forgetpassword";
                return Axios.post(url,{names:"Staff Id",id:char.staffId,email:char.email,password:char.pswd}).then(window.location.replace("/staff/mailsent"));
            }
        }
        return alert("Invalid Staff Id")
    }

    const changed=(e)=>{
        if (e.target.value=="staffId"){
            setFlag(false);
            setEmail("");
        }
        else{
            setFlag(true);
            setId("");
        }
    }

    var inp;
    if (flag){
        inp=(
            <form onSubmit={(e)=>submitted(e)}>
                <input type="email" placeholder="Email" name="email" style={{height:30, width:200,marginBottom:30}} value={email} onChange={(e)=>setEmail(e.target.value)} required autoFocus/>
                <div>
                    <button type="submit" style={{marginBottom:20}} className="b3 b5">Submit</button>
                </div>
            </form>
        )
    }

    else{
        inp=(
            <form onSubmit={(e)=>submittedId(e)}>
                <input type="text" placeholder="Staff Id" name="id" style={{height:30, width:200,marginBottom:30}} value={id} onChange={(e)=>setId(e.target.value)} required autoFocus/>
                <div>
                    <button type="submit" style={{marginBottom:20}} className="b3 b5">Submit</button>
                </div>
            </form>
        )
    }   

    return (
        <div>
            <Header2 back="/staff"/>
            <div className="frgt2">
                <div className="frgt">
                    <h1 className="dec" style={{fontSize:30, color:"green", marginBottom:15}}>FORGOT PASSWORD</h1>

                    <div className="ra">
                        <input type="radio" name="log" value="email" id="mail" style={{marginRight:10}} onChange={(e)=>changed(e)} defaultChecked/>
                        <label for="mail">Email</label>
                        <input type="radio" name="log" value="staffId" id="staffid" style={{marginLeft:50, marginRight:10}} onChange={(e)=>changed(e)}/>
                        <label for="staffid">Staff Id</label>
                        <div style={{height:15}}/>
                    </div>

                    {inp}
                </div>
            </div>
        </div>
    )
}

export default StaffFrgtPswd
