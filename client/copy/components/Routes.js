import React,{Component} from "react";
import {Route, Redirect, Switch} from "react-router-dom";
import StudentLogin from "./StudentLogin"
import StaffLogin from "./StaffLogin";
import AboutUs from "./AboutUs";
import Home from "./Home";
import StudentSignUp from "./StudentSignUp";
import StaffSignUp from "./StaffSignUp";
import StuFrgtPswd from "./StuFrgtPswd";
import StaffFrgtPswd from "./StaffFrgtPswd";

// class Routes extends Component {
//     render() {

function Routes(){
    return (
        <>
            <Switch>
                <Route exact path="/" render={()=><Home/>}/>
                <Route exact path="/student" render={()=><StudentLogin/>}/>
                <Route exact path="/staff" render={()=><StaffLogin/>}/>
                <Route exact path="/aboutus" render={()=><AboutUs/>}/>
                <Route exact path="/student/signup" render={()=><StudentSignUp/>}/>
                <Route exact path="/staff/signup" render={()=><StaffSignUp/>}/>
                <Route exact path="/student/signup/forgotpassword" render={()=><StuFrgtPswd/>}/>
                <Route exact path="/staff/signup/forgotpassword" render={()=><StaffFrgtPswd/>}/>
                <Redirect to="/"/>
            </Switch>
        </>
        );
    // }
}

export default Routes;