import React from 'react'
import {NavLink} from "react-router-dom";
import "./Style.css";
import Jamia from "./Jamia.jfif";

const Change=(refer,names)=>{
    return (
        <NavLink exact activeClassName="links" to={refer} style={{textDecoration:"None", fontSize:30}} className="dec">
            {names}
        </NavLink>
    );
}

function Header(){

    return(
        <div className="header">
            <img src={Jamia} alt="Jamia Millia Islamia"/>
            {Change ("/","Home")}
            {Change ("/student","Student Login")}
            {Change ("/staff","Staff Login")}
            {Change ("/admin","Admin Login")}
            {Change ("/aboutus","About Us")}
        </div>
    )
}

export default Header;