import React, { Component } from 'react'
import {NavLink} from "react-router-dom";
import "./Style.css";
import Jamia from "./Jamia.jfif";

// class Change extends Component{
//     render(){
function Change (refers,names){
    return (
            <NavLink exact activeClassName="links" to={this.props.refers} style={{textDecoration:"None"}}>
                {this.props.names}
            </NavLink>
        );
    // }
}

// class Header extends Component{
//     render() {
function Header(){
        return(
                <div className="header">
                    <img src={Jamia} alt="Jamia"/>
                    {/* <Change refers="/" names="Home"/>
                    <Change refers="/student" names="Student Login"/>
                    <Change refers="/staff" names="Staff Login"/>
                    <Change refers="/aboutus" names="About Us"/> */}
                    {Change ("/","Home")}
                    {Change ("/student","Student Login")}
                    {Change ("/staff","Staff Login")}
                    {Change ("/aboutus","About Us")}
                </div>
        )
    // }
}
export default Header;