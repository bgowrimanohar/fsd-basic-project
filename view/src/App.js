import React, { useState } from "react";
import "./App.css"
import Axios from "axios"
function App()
{
  const[sname,setStudentName]=useState("")
  const[tech,setTechnology]=useState("")
  const[sec,setSection]=useState("")
const sumbitreview=()=>{
  Axios.post('http://localhost:9000/student',
  {
    name:sname,
    tech:tech,
    section:section
  }).then(()=>{
    alert("sucess");
  })
}
return(
<div className="App">
<h1><b>Crud application </b></h1>
<div className="information">
<label><b> Student Name</b></label>
<input type="text" name="sname" onChange={(e)=>{
setStudentName(e.target.value);
  }} required />
<label><b> Technology</b></label>
<input type="text" name="tech" onChange={(e)=>{
setStudentName(e.target.value);
  }} required/>
<label><b> Section</b></label>
<input type="text" name="sec" onChange={(e)=>{
setStudentName(e.target.value);
  }} required/>
<button><b>Submit</b></button>
</div>
</div>
);

}