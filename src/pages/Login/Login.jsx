import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import LoginImg from '../../assets/loginRasm.svg'
import './Login.scss'
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
function Login() {
     let navigate=useNavigate();
    let [phone,setPhone]=useState("");
    let [parol,setParol]=useState("");
    let [pass,setPass]=useState("");
    let PhoneNumber="+998";
    let Parol="front";
    let Pass="nima";
    function handleClick() {
      if(PhoneNumber===phone && Parol===parol && Pass==pass){
        navigate('/');
      }else{
        navigate('/login');
      }
    }
    return (
      <div className='Login'>
          <div className="LoginCheck">
              <h2>Welcome</h2>
              <p>Let’s log you in quickly</p>
              <TextField onChange={(e)=>setPhone(e.target.value)}  className='inp' id="standard-basic" label="Enter your phone" variant="standard" />
              <TextField onChange={(e)=>setParol(e.target.value)}  className='inp' id="standard-basic" label="Enter your parol" variant="standard" />
              <TextField onChange={(e)=>setPass(e.target.value)}  className='inp' id="standard-basic" label="Enter your password" variant="standard" />
              <Button className='checkingButton' variant="contained" color="success" onClick={handleClick}>CHACK</Button>
          </div>
          <img className="loginImg" src={LoginImg} alt="login img" />
      </div>
    )
}

export default Login