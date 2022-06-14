import React from 'react'
import Jamia from "./Jamia.jfif";
import {NavLink} from "react-router-dom";
import "./Style.css";

function Header2(props){
    const back=props.back;
    return (
        <div>
            <div className="home">
                <NavLink to={back} style={{textDecoration:"none",color:"white",fontSize:23,paddingRight:20}}>Back</NavLink>
                <NavLink to="/" style={{textDecoration:"none",color:"white",fontSize:23}}>Home</NavLink>
            </div>
            
            <div className="header2">
                <img src={Jamia} alt="Jamia"/>
            </div>
            <div  className="App2" style={{backgroundColor:'white'}}>
                <h1 style={{color:"darkgreen",fontSize:50,fontFamily:"algerian"}}>JAMIA MILLIA ISLAMIA</h1>
            </div>
        </div>
    )
}

export default Header2