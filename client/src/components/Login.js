import React, {useState} from 'react'
import { NavLink } from 'react-router-dom';
import Axios from "axios";

function Login(props){
    const [mail,setMail]=useState("");
    const [pswd,setPswd]=useState("");
    
    const names=props.names;
    const occ=props.occ;

    const submitted=(e)=>{
        e.preventDefault();
        alert("hello");
    }
  
    return (
        <>
            <form onSubmit={(event)=>submitted(event)}>
                <div style={{height:25,color:"green", fontSize:12}}>
                    <h1>{names}</h1>
                </div>
                <div style={{height:25}}/>
                <input type="email" placeholder="email" name="email" style={{height:30, width:200}} value={mail} onChange={(e)=>setMail(e.target.value)} required autoFocus/>
                <div style={{height:25}}/>
                <input type="password" placeholder="password" name="password" style={{height:30, width:200}} value={pswd} onChange={(e)=>setPswd(e.target.value)} required/>
                <div style={{height:25}}/>
                <NavLink to={`/${occ}/signup/forgotpassword`} style={{paddingRight:40,textDecoration:"None"}}>Forgot Password</NavLink>
                <button type="submit">Login</button>
                <div>
                    <p>Don't have an accout. <NavLink to={`/${occ}/signup`} style={{textDecoration:"none"}}>Sign Up here</NavLink></p>
                </div>
            </form>
        </>
    )
}

export default Login