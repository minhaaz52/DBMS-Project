import React,{useState,useEffect} from 'react';
import Axios from "axios";
import Header2 from "./Header2";
import { NavLink } from 'react-router-dom';

function StudentFrgtPswd(){

    const [email,setEmail]=useState("");
    const [arr,setArr]=useState("");
    const [id,setId]=useState("");
    const [flag,setFlag]=useState(true);

    useEffect(()=>{
        const url="http://localhost:4000/api/student/login/get";
        Axios.get(url).then(res=>setArr(res.data));
    },[])

    const submitted=(e)=>{
        e.preventDefault();
        for (const char of arr){
            if (char.email==email && char.isRegistered=="yes"){
                const url="http://localhost:4000/api/forgetpassword";
                return Axios.post(url,{names:"Student Id",id:char.studentId,email:email,password:char.pswd}).then(window.location.replace("/student/mailsent"));
            }
        }
        return alert("Invalid Email")
    }

    const submittedId=(e)=>{
        e.preventDefault();
        for (const char of arr){
            if (char.studentId==id && char.isRegistered=="yes"){
                const url="http://localhost:4000/api/forgetpassword";
                return Axios.post(url,{names:"Student Id",id:char.studentId,email:char.email,password:char.pswd}).then(window.location.replace("/student/mailsent"));
            }
        }
        return alert("Invalid Student Id")
    }

    const changed=(e)=>{
        if (e.target.value=="studentId"){
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
                    <button type="submit" className="b5 b3" style={{marginBottom:20}}>Submit</button>
                </div>
            </form>
        )
    }

    else{
        inp=(
            <form onSubmit={(e)=>submittedId(e)}>
                <input type="text" placeholder="Student Id" name="id" style={{height:30, width:200,marginBottom:30}} value={id} onChange={(e)=>setId(e.target.value)} required autoFocus/>
                <div>
                    <button type="submit" className="b3 b5" style={{marginBottom:20}}>Submit</button>
                </div>
            </form>
        )
    }

    return (
        <div>
            <Header2 back="/student"/>
            <div className="frgt2">
                <div className="frgt">
                    <h1 className="dec" style={{fontSize:30, color:"green", marginBottom:15}}>FORGOT PASSWORD</h1>

                    <div className="ra">
                        <input type="radio" name="log" value="email" id="mail" style={{marginRight:10}} defaultChecked onChange={(e)=>changed(e)}/>
                        <label for="mail">Email</label>
                        <input type="radio" name="log" value="studentId" id="stuid" style={{marginLeft:50, marginRight:10}} onChange={(e)=>changed(e)}/>
                        <label for="stuid">Student Id</label>
                        <div style={{height:15}}/>
                    </div>
                    
                    {inp}
                </div>
            </div>
        </div>
    )
}

export default StudentFrgtPswd
