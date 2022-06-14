import React from 'react'
import Header2 from "./Header2";
import {NavLink} from "react-router-dom";

function StudentMailSent() {
    return (
        <div className="App2">
            <Header2 back="/student"/>
            <h1>Email has been Successfully sent to your registered Email Address.</h1>
            <h2>Go to</h2>
            <h3><NavLink to="/" style={{textDecoration:"none"}}>Home</NavLink></h3>
            <h3><NavLink to="/student" style={{textDecoration:"none"}}>Student Login</NavLink></h3>
            <h3>Didn't receive email? <NavLink to="/student/signup/forgotpassword" style={{textDecoration:"none"}}>Try again</NavLink></h3>
        </div>
    )
}

export default StudentMailSent