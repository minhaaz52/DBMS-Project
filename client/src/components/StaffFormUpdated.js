import React from 'react'
import Header2 from "./Header2";
import {NavLink} from "react-router-dom";

function StaffFormUpdated() {
    return (
        <div className="App2">
            <Header2 back="/staff"/>
            <h1>You Account has been succesfully Updated.</h1>
            <h2>Go back to</h2>
            <h3><NavLink to="/" style={{textDecoration:"none"}}>Home</NavLink></h3>
            <h3><NavLink to="/staff" style={{textDecoration:"none"}}>Staff Login</NavLink></h3>
        </div>
    )
}

export default StaffFormUpdated
