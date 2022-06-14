import React from "react";
import {Route, Redirect, Switch} from "react-router-dom";
import StudentLogin from "./StudentLogin"
import StaffLogin from "./StaffLogin";
import AboutUs from "./AboutUs";
import Home from "./Home";

import StudentSignUp from "./StudentSignUp";
import StudentFrgtPswd from "./StudentFrgtPswd";
import StudentSignUpVerified from "./StudentSignUpVerified";
import StudentFormSubmitted from "./StudentFormSubmitted";
import StudentLoggedIn from "./StudentLoggedIn";
import StudentFormDeleted from "./StudentFormDeleted";
import StudentMailSent from "./StudentMailSent";

import StaffSignUp from "./StaffSignUp";
import StaffFrgtPswd from "./StaffFrgtPswd";
import StaffSignUpVerified from "./StaffSignUpVerified";
import StaffFormSubmitted from "./StaffFormSubmitted";
import StaffLoggedIn from "./StaffLoggedIn";
import StaffFormDeleted from "./StaffFormDeleted";
import StaffMailSent from "./StaffMailSent";

import AdminLogin from "./AdminLogin";
import AdminLoggedIn from "./AdminLoggedIn";

import AdminStudentRegistration from "./AdminStudentRegistration";
import AdminStudentLoggedIn from "./AdminStudentLoggedIn";
import StudentList from "./StudentList";

import AdminStaffRegistration from "./AdminStaffRegistration";
import AdminStaffLoggedIn from "./AdminStaffLoggedIn";
import StaffList from "./StaffList";

function Routes(){
    return (
        <>
            <Switch>
                <Route exact path="/" render={()=><Home/>}/>
                <Route exact path="/student" render={()=><StudentLogin/>}/>
                <Route exact path="/staff" render={()=><StaffLogin/>}/>
                <Route exact path="/admin" render={()=><AdminLogin/>}/>
                <Route exact path="/aboutus" render={()=><AboutUs/>}/>


                <Route exact path="/student/signup" render={()=><StudentSignUp/>}/>
                <Route exact path="/student/signup/forgotpassword" render={()=><StudentFrgtPswd/>}/>
                <Route exact path="/student/signup/:student_id" render={()=><StudentSignUpVerified/>}/>
                <Route exact path="/student/submitted" render={()=><StudentFormSubmitted/>}/>
                <Route exact path="/student/login/:stuid" render={()=><StudentLoggedIn/>}/>
                <Route exact path="/student/deregistered" render={()=><StudentFormDeleted/>}/>
                <Route exact path="/student/mailsent" render={()=><StudentMailSent/>}/>
            
                
                <Route exact path="/staff/signup" render={()=><StaffSignUp/>}/>
                <Route exact path="/staff/signup/forgotpassword" render={()=><StaffFrgtPswd/>}/>
                <Route exact path="/staff/signup/:staff_id" render={()=><StaffSignUpVerified/>}/>
                <Route exact path="/staff/submitted" render={()=><StaffFormSubmitted/>}/>
                <Route exact path="/staff/login/:staffid" render={()=><StaffLoggedIn/>}/>
                <Route exact path="/staff/deregistered" render={()=><StaffFormDeleted/>}/>
                <Route exact path="/staff/mailsent" render={()=><StaffMailSent/>}/>
            
                
                <Route exact path="/admin/login/deptId=:departid/adminId=:adminid" render={()=><AdminLoggedIn/>}/>
                
                
                <Route exact path="/deptId=:departid/admin=:adminid/student/registration" render={()=><AdminStudentRegistration/>}/>
                <Route exact path="/deptId=:departid/admin=:adminid/student=:stuid/loggedin" render={()=><AdminStudentLoggedIn/>}/>
                <Route exact path="/admin/login/deptId=:departid/adminId=:adminid/studentlist" render={()=><StudentList/>}/>
                
                <Route exact path="/deptId=:departid/admin=:adminid/staff/registration" render={()=><AdminStaffRegistration/>}/>
                <Route exact path="/deptId=:departid/admin=:adminid/staff=:staffid/loggedin" render={()=><AdminStaffLoggedIn/>}/>
                <Route exact path="/admin/login/deptId=:departid/adminId=:adminid/stafflist" render={()=><StaffList/>}/>
                
                
                <Redirect to="/"/>
            </Switch>
        </>
    );
}

export default Routes;