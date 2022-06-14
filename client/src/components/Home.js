import React,{useState,useEffect} from 'react'
import Header from "./Header";
import {NavLink,Link} from "react-router-dom";

import img1 from "./images/img1.jpg"; 
import img2 from "./images/img2.jpg"; 
import img3 from "./images/img3.jpg"; 
import img4 from "./images/img4.jpg"; 
import img5 from "./images/img5.jpg"; 
import img6 from "./images/img6.jpeg";
import img8 from "./images/img8.webp";
import img9 from "./images/img9.JPG";
import img10 from "./images/img10.webp"; 

function Home(){
    const [image1,setImage1]=useState(0);
    const [image2,setImage2]=useState(1);
    const [image3,setImage3]=useState(2);
    
    const images=[img5,img2,img3,img4,img9,img10,img6,img1,img8]
    const len=images.length;

    useEffect(()=>{
        const interval=setInterval(()=>{
            setImage1((preVal)=>(preVal+1)%len);
            setImage2((preVal)=>(preVal+1)%len);
            setImage3((preVal)=>(preVal+1)%len);
        },2000);
        return () => clearInterval(interval);
    },[])

    return (
        <div className="App2">
            <Header/>
            <div className="pic">
                <img  className="a" src={images[image1]} alt="Image"/>
                <img  className="a" src={images[image2]} alt="Image"/>
                <img  className="a" src={images[image3]} alt="Image"/>
            </div>

            <h1 style={{color:"purple",textDecoration:"underline"}} className="dec">IMPORTANT LINKS</h1>
            
            <div className="m dec" style={{color:"yellow"}}>
                <h2>Syllabus</h2>
                <h2>Time Table</h2>
                <h2>Other</h2>
            </div>
            
            <div className="l">
                <div className="syllabus">
                    {/* <h2>Syllabus</h2> */}
                    <a className="li" href="https://drive.google.com/file/d/1s2DWu3bWQBhwdCAuFEeRoXqMeR0bOR1v/view?usp=sharing" target="_blank" style={{textDecoration:"none"}}>BTech CSE Syllabus</a>
                    <a className="li" href="https://drive.google.com/file/d/1MIvYJztEx1y3ixjOffRGWD1U2DWlKXH4/view?usp=sharing" target="_blank" style={{textDecoration:"none"}}>BTech EE Syllabus</a>
                    <a className="li" href="https://drive.google.com/file/d/1SJVOXi5JyJfyOxWluJfOXcHPVaSPKDWZ/view?usp=sharing" target="_blank" style={{textDecoration:"none"}}>BTech ECE Syllabus</a>
                    <a className="li" href="https://drive.google.com/file/d/15x4yQElY88fN3aJ49e9XnGZQgHtUg29O/view?usp=sharing" target="_blank" style={{textDecoration:"none"}}>BTech ME Syllabus</a>
                </div>

                <div className="timeTable">
                    {/* <h2>Time Table</h2> */}
                    <a className="li" href="https://drive.google.com/file/d/11yUWQJkqkdvt5eL25lEnBcp26Mex74sk/view?usp=sharing" target="_blank" style={{textDecoration:"none"}}>BTech CSE Time Table</a>
                    <a className="li" href="https://drive.google.com/file/d/1moBCQ4ZrH9SKKYW6cfv9lOK67zsTmQ63/view?usp=sharing" target="_blank" style={{textDecoration:"none"}}>BTech CE Time Table</a>
                    <a className="li" href="https://drive.google.com/file/d/1MzRbf5rGnQCAtF-4Ibyy-l3cqnbim2cE/view?usp=sharing" target="_blank" style={{textDecoration:"none"}}>BTech ECE Time Table</a>
                    <a className="li" href="https://drive.google.com/file/d/1Bzcl9iAZr2rcqu6QXS5K3sX47c91Jx_4/view?usp=sharing" target="_blank" style={{textDecoration:"none"}}>BTech EE Time Table</a>
                </div>

                <div className="others">
                    {/* <h2>Other</h2> */}
                    <a className="li" href="https://jmielibrary.informaticsglobal.com/login" target="_blank" style={{textDecoration:"none"}}>E-Library</a>
                </div>
            </div>
        </div>
    )
}

export default Home
