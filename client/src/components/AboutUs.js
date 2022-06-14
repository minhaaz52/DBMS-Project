import React from 'react'
import "./Style.css";
import Header from "./Header";

const Table=(name,roll,contact,email,course)=>{
    return(
        <>
            <tr>
                <td>{name}</td>
                <td>{roll}</td>
                <td>{contact}</td>
                <td>{email}</td>
                <td>{course}</td>
            </tr>
        </>
    )
}

function AboutUs(){
    
    return (
        <div>
            <Header/>
            <h1 style={{color:"tomato"}}>TEAM MEMBERS</h1>
            <table className="table" border="2">
                {Table ("Name","Roll No","Contact No","E-mail","Course")}
                {Table ("Asif Nazir","19BCS009","+91 70068 10951",<a href="mailto:aasif.17526@gmail.com" style={{textDecoration:"none"}}>aasif.17526@gmail.com</a>,"BTech CSE")}
                {Table ("Avi Tyagi","19BCS010","+91 89793 09185",<a href="mailto:avityagi08122000@gmail.com" style={{textDecoration:"none"}}>avityagi08122000@gmail.com</a>,"BTech CSE")}
                {Table ("Shahabuddin","19BCS031","+91 89360 30633",<a href="mailto:shahabuddinbravo40@gmail.com " style={{textDecoration:"none"}}>shahabuddinbravo40@gmail.com </a>,"BTech CSE")}
                {Table ("Md Minhaaz","19BCS014","+91 92056 62049",<a href="mailto:minhaaz0205@gmail.com" style={{textDecoration:"none"}}>minhaaz0205@gmail.com</a>,"BTech CSE")}
            </table>
        </div>
    )
}

export default AboutUs