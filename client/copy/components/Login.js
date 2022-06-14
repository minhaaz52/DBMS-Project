import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

class Login extends Component {
    submitted=(event)=>{
        event.preventDefault();
        // console.log(event);
        alert(event.target.email.value);
    }

    render() {
        const {names,occ}=this.props
        return (
            <>
                <form onSubmit={this.submitted}>
                    <div style={{height:25,color:"green", fontSize:12}}>
                        <h1>{names}</h1>
                    </div>
                    <div style={{height:25}}/>
                    <input type="email" placeholder="email" name="email" style={{height:30, width:200}} required/>
                    <div style={{height:25}}/>
                    <input type="password" placeholder="password" name="password" style={{height:30, width:200}} required/>
                    <div style={{height:25}}/>
                    <NavLink to={`/${occ}/signup/forgotpassword`} style={{paddingRight:40,textDecoration:"None"}}>Forgot Password</NavLink>
                    <button type="submit">Login</button>
                    <div>
                        <p>Don't have an accout. <NavLink to={`/${occ}/signup`} style={{textDecoration:"none"}}>Sign Up here</NavLink></p>
                    </div>
                </form>
            </>
        )
    }
}

export default Login