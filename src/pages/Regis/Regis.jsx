import "./Regis.scss";
import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import RegisImg from '../../assets/loginRasm.svg'
import {useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import axios from "axios";

function Regis() {
    let navigate=useNavigate();
    let url="https://589a-86-62-2-178.ngrok-free.app/users/signup/";
    let [name,setName]=useState("");
    let [surname,setSurName]=useState("");
    let [tell,setTell]=useState("");
    let [parol,setParol]=useState(""); 
    async function handlePost() {
      let data={
        name:name,
        surname:surname,
        phone:tell,
        password:parol
       }
       await  axios.post(url,data).then((resul)=>{
            console.log("ishladi");
       })
       navigate("/profile")
    }
  return (
    <div className='Regis'>
    <div className="RegisCheck">
        <h2>Welcome</h2>
        <p>Let’s log you in quickly Registiration</p>
        <TextField onChange={(e)=>setName(e.target.value)}  className='inp' id="standard-basic" label="Enter your name" variant="standard" />
        <TextField onChange={(e)=>setSurName(e.target.value)}  className='inp' id="standard-basic" label="Enter your surname" variant="standard" />
        <TextField onChange={(e)=>setTell(e.target.value)}  className='inp' id="standard-basic" label="Enter your phoneNumber" variant="standard" />
        <TextField onChange={(e)=>setParol(e.target.value)}  className='inp' id="standard-basic" label="Enter Create parol" variant="standard" />
        <Button className='joiningButton' variant="contained" color="success" onClick={handlePost}>ADD</Button>
    </div>
    <img className="regisImg" src={RegisImg} alt="login img" />
</div>
  )
}

export default Regis