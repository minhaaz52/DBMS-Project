import React, { Component } from 'react'
import Jamia from "./Jamia.jfif";
import {NavLink} from "react-router-dom";
import "./Style.css";

class Header2 extends Component {
    render() {
        return (
            <div>
                <div className="header2">
                    <img src={Jamia} alt="Jamia"/>
                </div>
                <div className="home">
                    <NavLink to="/"><button style={{fontSize:15}}>Home</button></NavLink>
                </div>
            </div>
        )
    }
}

export default Header2
