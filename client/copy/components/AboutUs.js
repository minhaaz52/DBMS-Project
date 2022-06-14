import React, { Component } from 'react'
import "./Style.css";
import Header from "./Header";

// class Table extends Component{
//     render(){
const Table=(name,roll,contact,email,course)=>{
        // const {name,roll,contact,email,course}=this.props;
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
    // }
}


// class AboutUs extends Component {
    // render() {
function AboutUs(){
    return (
            <div>
                <Header/>
                <h1>TEAM MEMBERS</h1>
                <table className="table" border="2">
                    {/* <Table name="Name" roll="Roll No" contact="Contact No" email="E-mail" course="Course"/>
                    <Table name="Asif Nazir" roll="19BCS009" contact="12345" email="abc@abc.com" course="BTech CSE"/>
                    <Table name="Avi Tyagi" roll="19BCS010" contact="12345" email="abc@abc.com" course="BTech CSE"/>
                    <Table name="Shahabuddin" roll="19BCS031" contact="12345" email="abc@abc.com" course="BTech CSE"/>
                    <Table name="Md Minhaaz" roll="19BCS014" contact="12345" email="abc@abc.com" course="BTech CSE"/> */}
                    {Table ("Name","Roll No","Contact No","E-mail","Course")}
                    {Table ("Asif Nazir","19BCS009","12345","abc@abc.com","BTech CSE")}
                    {Table ("Avi Tyagi","19BCS010","12345","abc@abc.com","BTech CSE")}
                    {Table ("Shahabuddin","19BCS031","12345","abc@abc.com","BTech CSE")}
                    {Table ("Md Minhaaz","19BCS014","12345","abc@abc.com","BTech CSE")}
                </table>
            </div>
        )
    // }
}

export default AboutUs