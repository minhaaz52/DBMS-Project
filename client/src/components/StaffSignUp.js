import React, {useState} from 'react';
import Header2 from "./Header2";
import "./Style.css";
import Axios from "axios";
import firebase from "./firebase";

function StaffSignUp(){

    const [staffId,setStaffId]=useState("");
    const [mob,setMob]=useState("");
    const [btnClr,setBtnClr]=useState("tomato");
    const [verifyBtn,setVerifyBtn]=useState("Verify");

    const [clr,setClr]=useState("white");
    const [val,setVal]=useState("");
    const [per,setPer]=useState(false);
    const [msg,setMsg]=useState("");
    const [flag,setFlag]=useState(false);
    const [op,setOp]=useState("");
    const [otpName,setOtpName]=useState("Verify OTP");
    const [optClr,setOtpclr]=useState("tomato");
    const [resend,setResend]=useState("Resend OTP");
    const [resendClr,setResendClr]=useState("brown");
    
    const verify=(e)=>{
        console.log(e);
        e.preventDefault();
        setVerifyBtn("Verifying...");
        setBtnClr("orange");
        const url="http://localhost:4000/api/staff/signup/get";
        Axios.get(url).then(res=>{
            for (let char of res.data){
                if (char.staffId==e.target.staffId.value){
                    if (char.isRegistered=="no"){
                        if (char.mobileNo==e.target.mob.value){
                            setVerifyBtn("Verified");
                            setBtnClr("lightgreen");
                            setClr("darkgreen");
                            clearTimeout(timeout);
                            setMsg("* OTP Verification");
                            setPer(true);
                            return sendOTP();                        }
                        else{
                            setVerifyBtn("Verify");
                            setBtnClr("tomato");
                            clearTimeout(timeout);
                            return alert("Invalid Mobile No");
                        }
                    }
                    else{
                        setVerifyBtn("Verify");
                        setBtnClr("tomato");
                        clearTimeout(timeout);
                        return alert("User is already registerd")
                    }
                }
            }
            setVerifyBtn("Verify");
            setBtnClr("tomato");
            clearTimeout(timeout);
            return alert("Invalid Staff Id or Mobile No")
        })

        const timeout=setTimeout(()=>{
            setVerifyBtn("Verify");
            setBtnClr("tomato");
            alert("Connection Time Out. Try again");
        },5000);
    }

    const sendOTP=()=>{
        setFlag(false);
        setOp("");
        document.getElementById("recaptcha").innerHTML=""
        let recaptcha=new firebase.auth.RecaptchaVerifier("recaptcha");
        recaptcha.a.theme="dark";
        recaptcha.reset=false;
        let number=`+91${mob}`;
        firebase.auth().signInWithPhoneNumber(number,recaptcha).then((e)=>{
            setMsg("* OTP has been sent to your registered Mobile No");
            setFlag(true);
            setVal(e);
        })
    }

    const verifyOTP=()=>{
        setOtpName("Verifying");
        setOtpclr("orange");
        let code=document.getElementById("otp").value;
       
        val.confirm(code).then((res)=>{
            return window.location.replace(`/staff/signup/${staffId}`);
            // return alert("Successful");
        }).catch((err)=>{
            alert("Invalid OTP");
            setOtpclr("tomato");
            setOtpName("Verify OTP");

        })
    }

    var inp;
    if (flag){
        inp=(
            <div className="forms">
                    <h1 className="dec" style={{fontSize:30, color:"green"}}>OTP</h1>

                    <input type="text" placeholder="OTP" id="otp" value={op} onChange={(e)=>{setOp(e.target.value)}} style={{height:30, width:200}}/>

                    <div style={{height:25}}/>
                    <button onClick={()=>verifyOTP()} className="b3 b5" style={{backgroundColor:optClr, borderColor:optClr}}>{otpName}</button>

                    <div style={{height:25}}/>
                    <button onClick={()=>sendOTP()} className="b3 b5" style={{backgroundColor:resendClr, borderColor:resendClr, marginBottom:25}}>{resend}</button>
            </div>
        )
    }

    return (
        <div className="App2">
            <Header2 back="/staff"/>
            <div className="ma">
                {msg}
            </div>

            <div className="forms">
                <h1 className="dec" style={{fontSize:30, color:"green"}}>STAFF</h1>
    
                <form onSubmit={(e)=>verify(e)}>
                    <input type="text" name="staffId" placeholder="Staff ID" value={staffId} onChange={(e)=>setStaffId(e.target.value)} style={{height:30, width:200}} autoFocus required disabled={per}/>

                    <div style={{height:25}}/>
                    <input type="text" name="mob" placeholder="Mobile No" value={mob} onChange={(e)=>setMob(e.target.value)} style={{height:30, width:200}} required disabled={per}/>

                    <div style={{height:25}}/>
                    <button style={{backgroundColor:btnClr, borderColor:btnClr, color:clr, marginBottom:25}} type="submit" className="b3 b5" disabled={per}>{verifyBtn}</button>
                </form>
            </div>
            
            <div style={{ display:"flex",justifyContent:"center", marginTop:30}}>
                <div id="recaptcha"></div>
            </div>

            <div style={{height:30}}/>
            {inp}
            <div style={{height:50}}/>
        </div>
    )
}

export default StaffSignUp;
