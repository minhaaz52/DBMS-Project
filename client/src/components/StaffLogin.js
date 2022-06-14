import React,{useState} from 'react'
import "./Style.css";
import Header from "./Header";
import { NavLink } from 'react-router-dom';
import Axios from "axios";

function StaffLogin(){
    const [mail,setMail]=useState("");
    const [pswd,setPswd]=useState("");
    const [id,setId]=useState("");
    const [flag,setFlag]=useState(true);
    
    const submitted=(e)=>{
        e.preventDefault();
        const url="http://localhost:4000/api/staff/login/get";
        Axios.get(url).then(res=>{
            for (const char of res.data){
                if (char.email==mail){
                    // password verification code.
                    if (char.pswd==pswd && char.isRegistered=="yes"){
                        const staffId=char.staffId;
                        return window.location.replace(`/staff/login/${staffId}`);
                    }
                }
            }
            clearTimeout(timeout);
            return alert("Invalid email or password");
        });
        
        const timeout=setTimeout(()=>{
            alert("Connection Time Out. Try again");
        },5000);
    }
 
    const submittedId=(e)=>{
        e.preventDefault();
        const url="http://localhost:4000/api/staff/login/get";
        Axios.get(url).then(res=>{
            for (const char of res.data){
                if (char.staffId==id){
                    // password verification code.
                    if (char.pswd==pswd && char.isRegistered=="yes"){
                        const staffId=char.staffId;
                        return window.location.replace(`/staff/login/${staffId}`);
                    }
                }
            }
            clearTimeout(timeout);
            return alert("Invalid Staff Id or password");
        });
        
        const timeout=setTimeout(()=>{
            alert("Connection Time Out. Try again");
        },5000);
    }

    const changed=(e)=>{
        if (e.target.value=="staffId"){
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
                
                <div style={{height:15}}/>
                <NavLink to={"/staff/signup/forgotpassword"} style={{paddingRight:40,textDecoration:"None", marginRight:50}}>Forgot Password</NavLink>

                <div style={{height:15}}/>
                <button type="submit" className="b3 b5 b8">Login</button>
            </form>
        )
    }

    else{
        inp=(
            <form onSubmit={(e)=>submittedId(e)}>
                <input type="text" placeholder="Staff Id" name="id" style={{height:30, width:200}} value={id} onChange={(e)=>setId(e.target.value)} required autoFocus/>
                <div style={{height:25}}/>
                <input type="password" placeholder="Password" name="password" style={{height:30, width:200}} value={pswd} onChange={(e)=>setPswd(e.target.value)} required/>
                
                <div style={{height:15}}/>
                <NavLink to={"/staff/signup/forgotpassword"} style={{paddingRight:40,textDecoration:"None", marginRight:50}}>Forgot Password</NavLink>

                <div style={{height:15}}/>
                <button type="submit" className="b3 b5 b8">Login</button>
            </form>
        )
    }

    return (
        <div>
            <Header/>
            <div style={{height:75}}/>

            <div className="forms">
                <div style={{height:25,color:"green", fontSize:12}}>
                    <h1 className="dec">STAFF LOGIN</h1>
                </div>
                <div style={{height:15}}/>

                <input type="radio" name="log" value="email" id="mail" style={{marginRight:10}} defaultChecked onChange={(e)=>changed(e)}/>
                <label for="mail">Email</label>
                <input type="radio" name="log" value="staffId" id="staffid" style={{marginLeft:50, marginRight:10}} onChange={(e)=>changed(e)}/>
                <label for="staffid">Staff Id</label>
                <div style={{height:15}}/>

                {inp}
                <div style={{height:20}}/>
                <NavLink to={"/staff/signup"}><button className="b5 b3" style={{marginBottom:25}} >Sign Up</button></NavLink>
            </div>
        </div>
    )
}

export default StaffLogin;
