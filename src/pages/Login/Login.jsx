import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import LoginImg from '../../assets/loginRasm.svg'
import './Login.scss'
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
function Login() {
     let navigate=useNavigate();
    let [name,setName]=useState("");
    let [surname,setSurName]=useState("");
    let [tell,setTell]=useState("");
    let PhoneNumber="+998";
    let Parol="front";
    let Pass="nima";
    function handleClick() {
      if(PhoneNumber===name && Parol===surname && Pass==tell){
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
              <TextField onChange={(e)=>setName(e.target.value)}  className='inp' id="standard-basic" label="Enter your name" variant="standard" />
              <TextField onChange={(e)=>setSurName(e.target.value)}  className='inp' id="standard-basic" label="Enter your surname" variant="standard" />
              <TextField onChange={(e)=>setTell(e.target.value)}  className='inp' id="standard-basic" label="Enter your phoneNumber" variant="standard" />
              <Button className='checkingButton' variant="contained" color="success" onClick={handleClick}>CHACK</Button>
          </div>
          <img className="loginImg" src={LoginImg} alt="login img" />
      </div>
    )
}

export default Login