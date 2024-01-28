import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import LoginImg from '../../assets/loginRasm.svg'
import './Login.scss'
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import axios from 'axios';
function Login() {
  let url="hhhh";
     let navigate=useNavigate();
    let [name,setName]=useState("");
    let [parol,setParol]=useState("");
    let [bor,setBor]=useState(false); 
    function sandProfile() {
      let data={
        name:name,
        password:parol
       }
        axios.post(url,data).then((resul)=>{
            
       })
      if(bor==true){
        navigate('/profile');
      }else{
        navigate('/login');
      }
    }
    return (
      <div className='Login'>
          <div className="LoginCheck">
              <h2>Welcome</h2>
              <p>Let’s log you in quickly login</p>
              <TextField onChange={(e)=>setName(e.target.value)}  className='inp' id="standard-basic" label="Enter your name" variant="standard" />
              <TextField onChange={(e)=>setParol(e.target.value)}  className='inp' id="standard-basic" label="Enter your parol" variant="standard" />
              <Button className='checkingButton' variant="contained" color="success" onClick={sandProfile}>CHACK</Button>
          </div>
          <img className="loginImg" src={LoginImg} alt="login img" />
      </div>
    )
}

export default Login;