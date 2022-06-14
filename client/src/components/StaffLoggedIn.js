import Axios from 'axios';
import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router'
import "./Style.css";
import Header2 from "./Header2";

function StaffLoggedIn() {
    const {staffid}=useParams();

    const [staffId,setStaffid]=useState("");
    const [name,setName]=useState("");
    const [fname,setFname]=useState("");
    const [mname,setMname]=useState("");
    const [dob,setDob]=useState("");
    
    const [deptName,setDeptname]=useState("");
    const [dateOfJoin,setDateofjoin]=useState("");
    const [salary,setSalary]=useState("");
    const [post,setPost]=useState("");

    const [gender,setGender]=useState("female");
    const [mob,setMob]=useState("");
    const [fmob,setFmob]=useState("");
    const [mmob,setMmob]=useState("");
    const [peradd,setPeradd]=useState("");
    const [perdist,setPerdist]=useState("");
    const [percity,setPercity]=useState("");
    const [perstate,setPerstate]=useState("");
    const [percode,setPercode]=useState("");
    const [pernation,setPernation]=useState("");
    const [corradd,setCorradd]=useState("");
    const [corrdist,setCorrdist]=useState("");
    const [corrcity,setCorrcity]=useState("");
    const [corrstate,setCorrstate]=useState("");
    const [corrcode,setCorrcode]=useState("");
    const [corrnation,setCorrnation]=useState("");
    const [mail,setMail]=useState("");
    const [pswd,setPswd]=useState("");
    const [altermail,setAltermail]=useState("");
    const [per,setPer]=useState(true);
    const [per2,setPer2]=useState(true);
    const [per3,setPer3]=useState(true);
    const [per4,setPer4]=useState(true);
    const [msg,setMsg]=useState("");
    const [per5,setPer5]=useState(true);
    
    useEffect(()=>{
        const url=`http://localhost:4000/api/staff/login/get/${staffid}`;
        Axios.get(url).then(res=>{
            setStaffid(res.data.staffId);
            setName(res.data.name);
            setFname(res.data.fatherName);
            setMname(res.data.motherName);
            setDob(res.data.dob);

            setDeptname(res.data.department);
            setPost(res.data.post);
            setDateofjoin(res.data.dateOfJoin);
            setSalary(res.data.salary);
            setGender(res.data.gender);
            setMob(res.data.mobileNo);
            setFmob(res.data.fatherMobileNo);
            setMmob(res.data.motherMobileNo);
            setPeradd(res.data.pAddress);
            setPercity(res.data.pCity);
            setPerdist(res.data.pDistrict);
            setPerstate(res.data.pState);
            setPercode(res.data.pCode);
            setPernation(res.data.pCountry);
            setCorradd(res.data.cAddress);
            setCorrcity(res.data.cCity);
            setCorrdist(res.data.cDistrict);
            setCorrstate(res.data.cState);
            setCorrcode(res.data.cCode);
            setCorrnation(res.data.cCountry);
            setMail(res.data.email);
            setPswd(res.data.pswd);
            setAltermail(res.data.altEmail);
        })
    },[])

    const Submitted=(e)=>{
        e.preventDefault();
        //mobile no verification
        if (numberVerification(mob,fmob,mmob)){

            var confirm=window.confirm("Do you want to submit the form");
            if (confirm==true){
                
                const url=`http://localhost:4000/api/staff/signup/post/${staffid}`

                Axios.put(url,{gender:gender,mobileNo:mob,fatherMobileNo:fmob,motherMobileNo:mmob,pAddress:peradd,pCity:percity,pDistrict:perdist,pState:perstate,pCode:percode,pCountry:pernation,cAddress:corradd,cCity:corrcity,cDistrict:corrdist,cState:corrstate,cCode:corrcode,cCountry:corrnation,email:mail,pswd:pswd,altEmail:altermail,isRegistered:"yes"}).then(
                    alert("Your Account has been Successfully Updated"),
                    window.location.reload());
            }
        }
    }

    const numberVerification=(mob,fmob,mmob)=>{
        if (/^\d{10}$/.test(mob)){
            if (/^\d{10}$/.test(fmob)){
                if(/^\d{10}$/.test(mmob)){
                    return true
                }
                alert("Invalid Mother's Mobile No");
                return false
            }
            alert("Invalid Father's Mobile No");
            return false
        }
        alert("Invalid Mobile No");
        return false
    }

    const Canceled=()=>{
        const confirm=window.confirm("Are you sure you want to cancel. All the changes will be lost.");
        if (confirm){
            return window.location.reload();
        }
    }

    const Logout=()=>{
        const confirm=window.confirm("Are you sure you want to logout?");
        if (confirm){
            return window.location.replace("/staff");
        }
    }

    const Edit=()=>{
        setPer3(false);
        setPer4(false);
        setMsg(<h4 className="ma">* All fields are mandatory</h4>)
    }

    const DeRegister=()=>{
        const confirm=window.confirm("Are you sure you want to Deregister your accout?");
        if (confirm){
            const url=`http://localhost:4000/api/staff/login/delete/${staffId}`
            Axios.put(url,{isRegistered:'no'}).then(window.location.replace("/staff/deregistered"));
        }
    }

    const checked=(e)=>{
        if (e.target.checked==true){
            setCorradd(peradd);
            setCorrdist(perdist);
            setCorrcity(percity);
            setCorrstate(perstate);
            setCorrcode(percode);
            setCorrnation(pernation)
        }
        else{
            setCorrdist("");
            setCorradd("");
            setCorrcity("");
            setCorrstate("");
            setCorrcode("");
            setCorrnation("")
        }
    }

    const pswdVisibility=(e)=>{
        var x=document.getElementById("pswd")
        
        if (e.target.checked==true){
            x.type="text";
        }
        else{
            x.type="password";
        }
    }

    return (
        <div>
            <Header2 back="/staff"/>
            <div className="ht">
                <div className="ms">
                {msg}
                </div>

                <div className="btn3">
                    <button onClick={Logout} className="b3">Logout</button>
                    <button onClick={Edit} className="b3" style={{backgroundColor:"green", borderColor:"green"}}>Edit</button>
                    <button onClick={DeRegister} className="b3" style={{backgroundColor:"rgb(211, 38, 38)", borderColor:"rgb(211, 38, 38)"}}>Unenroll</button>
                </div>
            </div>

            <div className="form3 App2">
                <form onSubmit={(e)=>Submitted(e)} id="form">

                                {/* ACADEMIC DETAILS */}

                    <div className="divider">
                        <h3>ACADEMIC DETAILS</h3>
                    </div>

                                {/* staff ID */}
                    
                    <div className="form2">
                        <div className="co">
                            <label className="la">Staff ID :</label>
                            <input type="text" name="staffId" value={staffId} onChange={(e)=>setStaffid(e.target.value)} required={per5} readOnly={per} disabled={per2}/>

                            <button style={{backgroundColor:"lightgreen", marginLeft:50, fontSize:15, paddingLeft:10, paddingRight:10, borderWidth:1, color:"darkgreen", fontWeight:"bold"}} disabled>Verified</button>
                        </div>
                    </div>

                                {/* Department & Post */}

                    <div className="form2">
                        <div className="co">
                            <label className="la">Department :</label>
                            <select name="deptName" value={deptName} onChange={(e)=>setDeptname(e.target.value)} className="se" required={per5} disabled={per2}>
                                <option value="ce">Civil</option>
                                <option value="cse">Computer</option>
                                <option value="ee">Electrical</option>
                                <option value="ece">Electronics & Communication</option>
                                <option value="me">Mechanical</option>
                            </select>
                        </div>

                        <div className="co">
                            <label className="la">Post :</label>
                            <select name="post" value={post} onChange={(e)=>setPost(e.target.value)} className="se" required={per5} disabled={per2}>
                                <option value="prof">Professor</option>
                                <option value="assprof">Assistant Professor</option>
                                <option value="intern">Intern</option>
                            </select>
                        </div>
                    </div>

                                {/* Date of Joining & Salary */}

                    <div className="form2">
                        <div className="co">
                            <label className="la">Date of Joining :</label>
                            <input type="date" name="dateOfJoin" value={dateOfJoin} onChange={(e)=>setDateofjoin(e.target.value)} placeholder="Date of Joining" required={per5} readOnly={per} disabled={per2}/>
                        </div>

                        <div className="co">
                            <label className="la">Salary :</label>
                            <input type="text" name="salary" value={salary} onChange={(e)=>setSalary(e.target.value)} placeholder="Salary" required={per5} readOnly={per} disabled={per2}/>
                        </div>
                    </div>

                                {/* PERSONAl DETAILS */}
                    
                    <div className="divider">
                        <h3>PERSONAL DETAILS</h3>
                    </div>

                                {/* staff Information */}

                    <div className="form2">
                        <div className="co">
                            <label className="la">Name :</label>
                            <input type="text" name="name" value={name} onChange={(e)=>setName(e.target.value)} required={per5} readOnly={per} disabled={per2}/>
                        </div>

                        <div className="co">
                            <label className="la">Mobile No :</label>
                            <input type="text" name="mob" placeholder="Mobile No" value={mob} onChange={(e)=>setMob(e.target.value)} required={per5} readOnly={per3} disabled={per4}/>
                        </div>
                    </div>

                    <div className="form2">
                        <div className="co">
                            <label className="la">DOB :</label>
                            <input type="date" name="dob" value={dob} onChange={(e)=>setDob(e.target.value)} required={per5} readOnly={per} disabled={per2}/>
                        </div>

                        <div className="co">
                            <label className="la">Gender :</label>
                            <select value={gender} name="gender" onChange={(e)=>setGender(e.target.value)} className="se" required={per5} readOnly={per3} disabled={per4}>
                                <option value="female">Female</option>
                                <option value="male">Male</option>
                            </select>
                        </div>
                    </div>

                                {/* Father Information */}

                    <div className="form2">
                        <div className="co">
                            <label className="la">Father's Name</label>
                            <input type="text" name="fname" value={fname} onChange={(e)=>setFname(e.target.value)} required={per5} readOnly={per} disabled={per2}/>
                        </div>

                        <div className="co">
                            <label className="la">Father's Mobile No</label>
                            <input type="text" placeholder="Mobile No" name="fmob" value={fmob} onChange={(e)=>setFmob(e.target.value)} required={per5} readOnly={per3} disabled={per4}/>
                        </div>
                    </div>

                                    {/* Mother Information */}

                    <div className="form2">
                        <div className="co">
                            <label className="la">Mother's Name</label>
                            <input type="text" name="mname" value={mname} onChange={(e)=>setMname(e.target.value)} required={per5} readOnly={per} disabled={per2}/>
                        </div>

                        <div className="co">
                            <label className="la">Mother's Mobile No</label>
                            <input type="text" placeholder="Mobile No" name="mmob" value={mmob} onChange={(e)=>setMmob(e.target.value)} required={per5} readOnly={per3} disabled={per4}/>
                        </div>
                    </div>

                                {/* PERMANENT ADRRESS */}

                    <div className="divider">
                        <h3>PERMANENT ADDRESS</h3>
                    </div>

                                {/* Address & District */}

                    <div className="form2">
                        <div className="co">
                            <label className="la">Address :</label>
                            <input type="text" name="peradd" placeholder="Address" value={peradd} onChange={(e)=>setPeradd(e.target.value)} style={{width:500}} required={per5} readOnly={per3} disabled={per4}/>
                        </div>

                        <div className="co">
                            <label className="la">District</label>
                            <input type="text" name="perdist" placeholder="District" value={perdist} onChange={(e)=>setPerdist(e.target.value)} required={per5} readOnly={per3} disabled={per4}/>
                        </div>
                    </div>

                                {/* City & State */}

                    <div className="form2">
                        <div className="co">
                            <label className="la">City :</label>
                            <input type="text" name="percity" placeholder="City" value={percity} onChange={(e)=>setPercity(e.target.value)} required={per5} readOnly={per3} disabled={per4}/>
                        </div>

                        <div className="co">
                            <label className="la">State :</label>
                            <input type="text" name="perstate" placeholder="State" value={perstate} onChange={(e)=>setPerstate(e.target.value)} required={per5} readOnly={per3} disabled={per4}/>
                        </div>
                    </div>

                                {/* PIN Code & Country */}

                    <div className="form2">
                        <div className="co">
                            <label className="la">PIN Code :</label>
                            <input type="text" name="percode" placeholder="PIN Code" value={percode} onChange={(e)=>setPercode(e.target.value)} required={per5} readOnly={per3} disabled={per4}/>
                        </div>

                        <div className="co">
                            <label className="la">Country :</label>
                            <input type="text" name="pernation" placeholder="Country" value={pernation} onChange={(e)=>setPernation(e.target.value)} required={per5} readOnly={per3} disabled={per4}/>
                        </div>
                    </div>

                                {/* CORRESPONDENCE ADDRESS */}

                    <div className="divider">
                        <h3>CORRESPONDENCE ADDRESS</h3>
                    </div>

                                {/* Checkbox */}

                    <div className="form2">
                        <input id="chec" style={{marginLeft:10}} type="checkbox" name="check" onChange={(e)=>checked(e)} disabled={per4}/>
                        <label for="chec" style={{marginLeft:20}}><strong>Same as Permanent Address</strong></label>
                    </div>

                                {/* Address & District */}

                    <div className="form2">
                        <div className="co">
                            <label className="la">Address :</label>
                            <input type="text" name="corradd" placeholder="Address" value={corradd} onChange={(e)=>setCorradd(e.target.value)} style={{width:500}} required={per5} readOnly={per3} disabled={per4}/>
                        </div>

                        <div className="co">
                            <label className="la">District</label>
                            <input type="text" name="corrdist" placeholder="District" value={corrdist} onChange={(e)=>setCorrdist(e.target.value)} required={per5} readOnly={per3} disabled={per4}/>
                        </div>
                    </div>

                                {/* City & State */}

                    <div className="form2">
                        <div className="co">
                            <label className="la">City :</label>
                            <input type="text" name="corrcity" placeholder="City" value={corrcity} onChange={(e)=>setCorrcity(e.target.value)} required={per5} readOnly={per3} disabled={per4}/>
                        </div>

                        <div className="co">
                            <label className="la">State :</label>
                            <input type="text" name="corrstate" placeholder="State" value={corrstate} onChange={(e)=>setCorrstate(e.target.value)} required={per5} readOnly={per3} disabled={per4}/>
                        </div>
                    </div>

                                {/* PIN Code & Country */}

                    <div className="form2">
                        <div className="co">
                            <label className="la">PIN Code :</label>
                            <input type="text" name="corrcode" placeholder="PIN Code" value={corrcode} onChange={(e)=>setCorrcode(e.target.value)} required={per5} readOnly={per3} disabled={per4}/>
                        </div>

                        <div className="co">
                            <label className="la">Country :</label>
                            <input type="text" name="corrnation" placeholder="Country" value={corrnation} onChange={(e)=>setCorrnation(e.target.value)} required={per5} readOnly={per3} disabled={per4}/>
                        </div>
                    </div>

                                {/* LOGIN DETAILS */}

                    <div className="divider">
                        <h3>LOGIN DETAILS</h3>
                    </div>

                                {/* Email & Password */}

                    <div className="form2">
                        <div className="co">
                            <label className="la">Email :</label>
                            <input type="email" name="mail" placeholder="email" value={mail} onChange={(e)=>setMail(e.target.value)} required={per5} readOnly={per3} disabled={per4}/>
                        </div>

                        <div className="co">
                            <label className="la">Password :</label>
                            <input type="password" name="pswd" id="pswd" placeholder="password" value={pswd} onChange={(e)=>setPswd(e.target.value)} required={per5} readOnly={per3} disabled={per4}/>

                            <input id="abc" type="checkbox" style={{marginLeft:30}} onChange={(e)=>pswdVisibility(e)}/>
                            <label for="abc" style={{marginLeft:10}}><strong>Show Password</strong></label>
                        </div>
                    </div>

                    <div className="form2">
                        <div className="co">
                            <label className="la">Alternate Email :</label>
                            <input type="email" name="altermail" placeholder="email" value={altermail} onChange={(e)=>setAltermail(e.target.value)} readOnly={per3} disabled={per4}/> 
                            <label style={{marginLeft:20}}><strong>(optional)</strong></label>
                        </div>
                    </div>
                </form>

                             {/* Submit Buttons */}

                <div className="btn3">
                    <button className="cancel" onClick={Canceled} className="b2 b6" disabled={per4}>Cancel</button>
                    <button className="submit" form="form" type="submit" className="b2 b7" disabled={per4}>Save</button>
                </div>
            </div>
        </div>
    )
}

export default StaffLoggedIn;
