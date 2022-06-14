import React from 'react'
import Header2 from "./Header2";
import {NavLink} from "react-router-dom";

function StudentFormSubmitted() {
    return (
        <div className="App2">
            <Header2 back="/student"/>
            <h1>You Account has been succesfully DeRegistered.</h1>
            <h2>Go back to</h2>
            <h3><NavLink to="/" style={{textDecoration:"none"}}>Home</NavLink></h3>
            <h3><NavLink to="/student" style={{textDecoration:"none"}}>Student Login</NavLink></h3>
        </div>
    )
}

export default StudentFormSubmitted
