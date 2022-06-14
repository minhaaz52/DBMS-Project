import React from 'react'
import Header2 from "./Header2";
import {NavLink} from "react-router-dom";

function StaffMailSent() {
    return (
        <div className="App2">
            <Header2 back="/staff"/>
            <h1>Email has been Successfully sent to your registered Email Address.</h1>
            <h2>Go to</h2>
            <h3><NavLink to="/" style={{textDecoration:"none"}}>Home</NavLink></h3>
            <h3><NavLink to="/staff" style={{textDecoration:"none"}}>Staff Login</NavLink></h3>
            <h3>Didn't receive email? <NavLink to="/staff/signup/forgotpassword" style={{textDecoration:"none"}}>Try again</NavLink></h3>
        </div>
    )
}

export default StaffMailSent