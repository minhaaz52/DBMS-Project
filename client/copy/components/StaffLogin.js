import React, { Component } from 'react'
import Login from "./Login";
import Header from "./Header";

class StaffLogin extends Component{
    render(){    
        return (
            <div>
                <Header/>
                <div style={{height:75}}/>
                <div className="forms">
                    <Login names="Staff Login" occ="staff"/>
                </div>
            </div>
        )
    }
}

export default StaffLogin;