const express=require("express");
const mysql=require("mysql");
const bodyParser=require("body-parser");
const cors=require("cors");
const nodemailer=require("nodemailer");
const {google}=require("googleapis");
const app=express();

const db=mysql.createPool({
    host:"localhost",
    user:"minhaaz",
    password:"minhaaz123",
    database:"dbms_project"
})

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));




            //  Admin

app.get("/api/admin/login/get",(req,res)=>{
    const sqlSelect="select * from admin_table"
    db.query(sqlSelect,(err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            res.send(result);
        }
    })
})


app.get("/api/admin/login/student/get/:departId",(req,res)=>{
    const deptId=req.params.departId;
    const sqlSelect="select * from student as s, student_login as l, student_parent_details as p where s.deptId=? and s.studentId=l.studentId and s.studentId=p.studentId;"
    db.query(sqlSelect,deptId,(err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            res.send(result);
        }
    })
})

app.get("/api/admin/login/staff/get/:departId",(req,res)=>{
    const deptId=req.params.departId;
    const sqlSelect="select * from staff as s, staff_login as l, staff_parent_details as p where s.deptId=? and s.staffId=l.staffId and s.staffId=p.staffId;"
    db.query(sqlSelect,deptId,(err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            res.send(result);
        }
    })
})



            // Student

app.get("/api/student/signup/get",(req,res)=>{
    const sqlSelect="select s.studentId, s.mobileNo, l.isRegistered from student as s, student_login as l where l.studentId=s.studentId;"
    db.query(sqlSelect,(err,result)=>{
        if (err){
            console.log(err);
        }
        else{
            res.send(result);
        }
    })
})


app.get("/api/student/signup/get/:stuid",(req,res)=>{
    const stuId=req.params.stuid;
    const sqlSelect="select s.studentId, s.name, s.mobileNo, s.dob, p.fatherName, p.motherName, s.rollNo, s.enrollmentNo, s.course, s.branch,s.semester from student as s, student_parent_details as p where s.studentId=p.studentId and s.studentId=?;"
    db.query(sqlSelect,stuId,(err,result)=>{
        if (err){
            console.log(err);
        }
        else{
            res.send(result[0]);
        }
    })
})


app.get("/api/admin/student/login/get",(req,res)=>{
    const sqlSelect="select studentId,deptId from student;"
    db.query(sqlSelect,(err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            res.send(result);
        }
    })
})

app.get("/api/student/login/get",(req,res)=>{
    const sqlSelect="select email,pswd,isRegistered,studentId from student_login;"
    db.query(sqlSelect,(err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            res.send(result);
        }
    })
})

app.get("/api/student/login/get/:stuid",(req,res)=>{
    const stuId=req.params.stuid;
    const sqlSelect="select * from student as s, student_parent_details as p, student_login as l, student_address as a where s.studentId=p.studentId and s.studentId=l.studentId and s.studentId=a.studentId and s.studentId=?;"
    db.query(sqlSelect,stuId,(err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            res.send(result[0]);
        }
    })
})

app.post("/api/admin=:adminid/student/registration",(req,res)=>{
    const studentId=req.body.studentId;
    const isRegistered=req.body.isRegistered;
    const rollNo=req.body.rollNo;
    const enrollmentNo=req.body.enrollmentNo;
    const course=req.body.course;
    const branch=req.body.branch;
    const deptId=req.body.deptId;
    const semester=req.body.semester;
    const mobileNo=req.body.mobileNo;
    const name=req.body.name;
    const fatherName=req.body.fatherName;
    const motherName=req.body.motherName;
    const dob=req.body.dob;
    
    const insertStudent="insert into student (studentId,rollNo,enrollmentNo,course,branch,semester,deptId,mobileNo,Name,dob) values (?,?,?,?,?,?,?,?,?,?);"

    const insertParent="insert into student_parent_details (studentId,fatherName,motherName) values (?,?,?);"

    const insertLogin="insert into student_login (studentId,isRegistered) values (?,?);"

    const insertAddress="insert into student_address (studentId) values (?);"

    db.query(insertStudent,[studentId,rollNo,enrollmentNo,course,branch,semester,deptId,mobileNo,name,dob],(err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            db.query(insertParent,[studentId,fatherName,motherName],(err2,result2)=>{
                if(err2){
                    console.log(err);
                }
                else{
                    db.query(insertLogin,[studentId,isRegistered],(err3,result3)=>{
                        if (err3){
                            console.log(err3);
                        }
                        else{
                            db.query(insertAddress,studentId,(err4,result4)=>{
                                if(err4){
                                    console.log(err4);
                                }
                                else{
                                    console.log("Successfully Inserted");
                                    res.send("Successful");
                                }
                            })
                        }
                    })
                }
            })
        }
    })
})

app.put("/api/student/signup/post/:stuid",(req,res)=>{
    const gender=req.body.gender;
    const mobile=req.body.mobile;
    const fmobileNo=req.body.fmobileNo;
    const focc=req.body.focc;
    const fincome=req.body.fincome;
    const mmobileNo=req.body.mmobileNo;
    const mocc=req.body.mocc;
    const mincome=req.body.mincome;
    const address=req.body.address;
    const city=req.body.city;
    const dist=req.body.dist;
    const state=req.body.state;
    const code=req.body.code;
    const nation=req.body.nation;
    const cadd=req.body.cadd;
    const ccity=req.body.ccity;
    const ccode=req.body.ccode;
    const cdistrict=req.body.cdistrict;
    const cstate=req.body.cstate;
    const cnation=req.body.cnation;
    const email=req.body.email;
    const password=req.body.password;
    const altermail=req.body.altermail;
    const isRegistered=req.body.isRegistered;
    const stuId=req.params.stuid;

    const sqlUpdate="update student as s, student_parent_details as p, student_login as l, student_address as a set s.mobileNo=?, s.gender=?, p.fatherMobileNo=?, p.fatherJob=?, p.fatherIncome=?, p.motherMobileNo=?, p.motherJob=?, p.motherIncome=?, a.pAddress=?, a.pCity=?, a.pDistrict=?, a.pState=?, a.pCode=?, a.pCountry=?, a.cAddress=?, a.cCity=?, a.cDistrict=?, a.cState=?, a.cCode=?, a.cCountry=?, l.email=? ,l.pswd=?, l.altEmail=?, l.isRegistered=? where s.studentId=p.studentId and s.studentId=l.studentId and s.studentId=a.studentId and s.studentId=?;"
    
    db.query(sqlUpdate,[mobile,gender,fmobileNo,focc,fincome,mmobileNo,mocc,mincome,address,city,dist,state,code,nation,cadd,ccity,cdistrict,cstate,ccode,cnation,email,password,altermail,isRegistered,stuId],(err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log("Successfully Updated");
            console.log(result);
        }
    })
})

app.put("/api/admin/student/update/put/:stuid",(req,res)=>{
    const stuId=req.params.stuid;

    const studentId=req.body.studentId;
    const name=req.body.name;
    const fatherName=req.body.fatherName;
    const motherName=req.body.motherName;
    const dob=req.body.dob;
    const isRegistered=req.body.isRegistered;
    
    const roll=req.body.roll;
    const enroll=req.body.enroll;
    const course=req.body.course;
    const branch=req.body.branch;
    const semester=req.body.semester;
    const gender=req.body.gender;
    const mobile=req.body.mobile;
    const fmobileNo=req.body.fmobileNo;
    const focc=req.body.focc;
    const fincome=req.body.fincome;
    const mmobileNo=req.body.mmobileNo;
    const mocc=req.body.mocc;
    const mincome=req.body.mincome;
    const address=req.body.address;
    const city=req.body.city;
    const dist=req.body.dist;
    const state=req.body.state;
    const code=req.body.code;
    const nation=req.body.nation;
    const cadd=req.body.cadd;
    const ccity=req.body.ccity;
    const ccode=req.body.ccode;
    const cdistrict=req.body.cdistrict;
    const cstate=req.body.cstate;
    const cnation=req.body.cnation;
    const email=req.body.email;
    const password=req.body.password;
    const altermail=req.body.altermail
    const deptId=req.body.deptId;

    const updateId="update student set studentId=? where studentId=?;"

    const sqlUpdate="update student as s, student_login as l, student_address as a, student_parent_details as p set s.name=?, s.deptId=?, p.fatherName=?, p.motherName=?, s.dob=?, s.rollNo=?, s.enrollmentNo=?, s.course=?, s.branch=?, s.semester=?, s.mobileNo=?, s.gender=?, p.fatherMobileNo=?, p.fatherJob=?, p.fatherIncome=?, p.motherMobileNo=?, p.motherJob=?, p.motherIncome=?, a.pAddress=?, a.pCity=?, a.pDistrict=?, a.pState=?, a.pCode=?, a.pCountry=?, a.cAddress=?, a.cCity=?, a.cDistrict=?, a.cState=?, a.cCode=?, a.cCountry=?, l.email=? , l.pswd=?, l.altEmail=?, l.isRegistered=? where l.studentId=? and a.studentId=? and p.studentId=? and  s.studentId=?;"

    db.query(updateId,[studentId,stuId],(err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            db.query(sqlUpdate,[name,deptId,fatherName,motherName,dob,roll,enroll,course,branch,semester,mobile,gender,fmobileNo,focc,fincome,mmobileNo,mocc,mincome,address,city,dist,state,code,nation,cadd,ccity,cdistrict,cstate,ccode,cnation,email,password,altermail,isRegistered,studentId,studentId,studentId,studentId],(err2,result2)=>{
                if(err2){
                    console.log(err2);
                }
                else{
                    console.log("Successfully Updated");
                    console.log(result2);
                }
            })
        }
    })
})


app.put("/api/student/login/delete/:stuid",(req,res)=>{
    const studentId=req.params.stuid;
    const isRegistered=req.body.isRegistered;
    const sqlUpdate="update student_login set isRegistered=? where studentId=?;"

    db.query(sqlUpdate,[isRegistered,studentId],(err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log("Successfully Updated");
        }
    })
})

app.delete("/api/admin/student/delete/:stuid",(req,res)=>{
    const stuid=req.params.stuid;
    const sqlDelete="delete from student where studentId=?;"
    db.query(sqlDelete,stuid,(err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log("Successfully Deleted");
        }
    })
})


            // Staff


app.get("/api/staff/signup/get",(req,res)=>{
    const sqlSelect="select s.staffId, s.mobileNo, l.isRegistered from staff as s, staff_login as l where l.staffId=s.staffId;"
    db.query(sqlSelect,(err,result)=>{
        if (err){
            console.log(err);
        }
        else{
            res.send(result);
        }
    })
})

app.get("/api/staff/login/get",(req,res)=>{
    const sqlSelect="select email,pswd,isRegistered,staffId from staff_login;"
    db.query(sqlSelect,(err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            res.send(result);
        }
    })
})


app.get("/api/staff/signup/get/:staffId",(req,res)=>{
    const staffId=req.params.staffId;
    const sqlSelect="select s.staffId, s.name, s.name, s.department, s.post, s.dateOfJoin, s.salary, s.mobileNo, s.dob, p.fatherName, p.motherName from staff as s, staff_parent_details as p where s.staffId=p.staffId and s.staffId=?;"

    db.query(sqlSelect,staffId,(err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            res.send(result[0]);
        }
    })
})


app.get("/api/staff/login/get/:staffid",(req,res)=>{
    const staffId=req.params.staffid;
    const sqlSelect="select * from staff as s, staff_parent_details as p, staff_login as l, staff_address as a where s.staffId=p.staffId and s.staffId=l.staffId and s.staffId=a.staffId and s.staffId=?;"
    db.query(sqlSelect,staffId,(err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            res.send(result[0]);
        }
    })
})


app.get("/api/admin/staff/login/get",(req,res)=>{
    const sqlSelect="select staffId,deptId from staff;"
    db.query(sqlSelect,(err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            res.send(result);
        }
    })
})

app.put("/api/staff/signup/post/:staffId",(req,res)=>{
    const staffId=req.params.staffId;
    const gender=req.body.gender;
    const mobileNo=req.body.mobileNo;
    const pAddress=req.body.pAddress;
    const pDistrict=req.body.pDistrict;
    const pCity=req.body.pCity;
    const pCode=req.body.pCode;
    const pState=req.body.pState;
    const pCountry=req.body.pCountry;
    const cAddress=req.body.cAddress;
    const cDistrict=req.body.cDistrict;
    const cCity=req.body.cCity;
    const cCode=req.body.cCode;
    const cState=req.body.cState;
    const cCountry=req.body.cCountry;
    const fatherMobileNo=req.body.fatherMobileNo;
    const motherMobileNo=req.body.motherMobileNo;
    const email=req.body.email;
    const pswd=req.body.pswd;
    const altEmail=req.body.altEmail;
    const isRegistered=req.body.isRegistered;

    const sqlUpdate="update staff as s, staff_parent_details as p, staff_address as a, staff_login as l set s.mobileNo=?, s.gender=?, a.pAddress=?, a.pDistrict=?, a.pCity=?, a.pCode=?, a.pState=?, a.pCountry=?, a.cAddress=?, a.cDistrict=?, a.cCity=?, a.cCode=?, a.cState=?, a.cCountry=?, p.fatherMobileNo=?, p.motherMobileNo=?, l.email=?, l.pswd=?, l.altEmail=?, l.isRegistered=? where s.staffId=p.staffId and s.staffId=l.staffId and s.staffId=a.staffId and s.staffId=?;"

    db.query(sqlUpdate,[mobileNo,gender,pAddress,pDistrict,pCity,pCode,pState,pCountry,cAddress,cDistrict,cCity,cCode,cState,cCountry,fatherMobileNo,motherMobileNo,email,pswd,altEmail,isRegistered,staffId],(err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log(result);
        }
    })
})


app.put("/api/staff/login/delete/:staffid",(req,res)=>{
    const staffId=req.params.staffid;
    const isRegistered=req.body.isRegistered;
    const sqlUpdate="update staff_login set isRegistered=? where staffId=?;"

    db.query(sqlUpdate,[isRegistered,staffId],(err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log("Successfully Updated");
        }
    })
})


app.put("/api/admin/staff/update/put/:staffid",(req,res)=>{
    const staffid=req.params.staffid;

    const staffId=req.body.staffId;
    const name=req.body.name;
    const fatherName=req.body.fatherName;
    const motherName=req.body.motherName;
    const dob=req.body.dob;
    const isRegistered=req.body.isRegistered;
    
    const department=req.body.department;
    const post=req.body.post;
    const dateOfJoin=req.body.dateOfJoin;
    const salary=req.body.salary;
    const gender=req.body.gender;
    const mobileNo=req.body.mobileNo;
    const fatherMobileNo=req.body.fatherMobileNo;
    const motherMobileNo=req.body.motherMobileNo;
    const pAddress=req.body.pAddress;
    const pCity=req.body.pCity;
    const pDistrict=req.body.pDistrict;
    const pState=req.body.pState;
    const pCode=req.body.pCode;
    const pCountry=req.body.pCountry;
    const cAddress=req.body.cAddress;
    const cCity=req.body.cCity;
    const cCode=req.body.cCode;
    const cDistrict=req.body.cDistrict;
    const cState=req.body.cState;
    const cCountry=req.body.cCountry;
    const email=req.body.email;
    const pswd=req.body.pswd;
    const altEmail=req.body.altEmail
    const deptId=req.body.deptId;

    const updateId="update staff set staffId=? where staffId=?;"

    const sqlUpdate="update staff as s, staff_login as l, staff_address as a, staff_parent_details as p set s.name=?, s.deptId=?, p.fatherName=?, p.motherName=?, s.dob=?, s.department=?, s.post=?, s.dateOfJoin=?, s.salary=?, s.mobileNo=?, s.gender=?, p.fatherMobileNo=?, p.motherMobileNo=?, a.pAddress=?, a.pCity=?, a.pDistrict=?, a.pState=?, a.pCode=?, a.pCountry=?, a.cAddress=?, a.cCity=?, a.cDistrict=?, a.cState=?, a.cCode=?, a.cCountry=?, l.email=? , l.pswd=?, l.altEmail=?, l.isRegistered=? where l.staffId=? and a.staffId=? and p.staffId=? and  s.staffId=?;"

    db.query(updateId,[staffId,staffid],(err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            db.query(sqlUpdate,[name,deptId,fatherName,motherName,dob,department,post,dateOfJoin,salary,mobileNo,gender,fatherMobileNo,motherMobileNo,pAddress,pCity,pDistrict,pState,pCode,pCountry,cAddress,cCity,cDistrict,cState,cCode,cCountry,email,pswd,altEmail,isRegistered,staffId,staffId,staffId,staffId],(err2,result2)=>{
                if(err2){
                    console.log(err2);
                }
                else{
                    console.log("Successfully Updated");
                    console.log(result2);
                }
            })
        }
    })
})


app.post("/api/admin=:adminid/staff/registration",(req,res)=>{
    const staffId=req.body.staffId;
    const isRegistered=req.body.isRegistered;

    const department=req.body.department;
    const post=req.body.post;
    const dateOfJoin=req.body.dateOfJoin;
    const salary=req.body.salary;
    const deptId=req.body.deptId;
    const mobileNo=req.body.mobileNo;
    const name=req.body.name;
    const fatherName=req.body.fatherName;
    const motherName=req.body.motherName;
    const dob=req.body.dob;
    
    const insertStaff="insert into staff (staffId,department,post,dateOfJoin,salary,deptId,mobileNo,Name,dob) values (?,?,?,?,?,?,?,?,?);"

    const insertParent="insert into staff_parent_details (staffId,fatherName,motherName) values (?,?,?);"

    const insertLogin="insert into staff_login (staffId,isRegistered) values (?,?);"

    const insertAddress="insert into staff_address (staffId) values (?);"

    db.query(insertStaff,[staffId,department,post,dateOfJoin,salary,deptId,mobileNo,name,dob],(err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            db.query(insertParent,[staffId,fatherName,motherName],(err2,result2)=>{
                if(err2){
                    console.log(err);
                }
                else{
                    db.query(insertLogin,[staffId,isRegistered],(err3,result3)=>{
                        if (err3){
                            console.log(err3);
                        }
                        else{
                            db.query(insertAddress,staffId,(err4,result4)=>{
                                if(err4){
                                    console.log(err4);
                                }
                                else{
                                    console.log("Successfully Inserted");
                                    res.send("Successful");
                                }
                            })
                        }
                    })
                }
            })
        }
    })
})


app.delete("/api/admin/staff/delete/:staffid",(req,res)=>{
    const staffId=req.params.staffid;
    const sqlDelete="delete from staff where staffId=?;"
    db.query(sqlDelete,staffId,(err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log("Successfully Deleted");
        }
    })
})



            // Forgot Password Mail

app.post("/api/forgetpassword",(req,res)=>{
    const names=req.body.names;
    const id=req.body.id;
    const email=req.body.email;
    const password=req.body.password;
    const message=`Your login details are as follows: Email : ${email} and Password : ${password}`;

    const subject="Group 10 DBMS Project";

    const htmlMail=`
        <h3>Your login details are as follows:</h3>
        <p>${names} : <b>${id}</b></p>
        <p>Email : <b>${email}</b></p>
        <p>Password : <b>${password}</b></p>
        `

    const clientId="914678491137-k7e5u33f2eb7n67afhi5bk87sd2bh2v3.apps.googleusercontent.com";
    const clientSecret="0HspPxM6ftQ1JIBsr1Ikwxl2";
    const redirectUri="https://developers.google.com/oauthplayground";
    const refreshToken="1//04PNEnWC-i834CgYIARAAGAQSNwF-L9IrX98g0tccyxhuyZov6PJ04OAI20Jd43abBcSbYy8w7HmOcHvNBMs_hCSH6ttIj7YMSHo"

    const oAuth2Client=new google.auth.OAuth2(clientId, clientSecret, redirectUri)
    oAuth2Client.setCredentials({refresh_token:refreshToken})

    const accessToken=oAuth2Client.getAccessToken()
    const transport=nodemailer.createTransport({
        service:"gmail",
        auth:{
            type:"oAuth2",
            user:"minhaaz0205@gmail.com",
            clientId:clientId,
            clientSecret:clientSecret,
            refreshToken:refreshToken,
            accessToken:accessToken
        }
    })

    const mailOptions={
        from:"minhaaz0205@gmail.com",
        to:email,
        subject:subject,
        text:message,
        html:htmlMail
    }

    transport.sendMail(mailOptions,(err,infor)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log("Successfully Sent Mail");
        }
    })
})


app.listen(4000,()=>{
    console.log("Successful");
})