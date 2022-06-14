import React, { Component } from 'react'
import "./Style.css";
import Login from "./Login";
import Header from "./Header";

class StudentLogin extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div style={{height:75}}/>
                <div className="forms">
                    <Login names="Student Login" occ="student"/>
                </div>
            </div>
        )
    }
}

export default StudentLogin;
