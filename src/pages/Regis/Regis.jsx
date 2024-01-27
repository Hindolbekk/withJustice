import "./Regis.scss";
import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import RegisImg from '../../assets/loginRasm.svg'
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
function Regis() {
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
    <div className='Regis'>
    <div className="RegisCheck">
        <h2>Welcome</h2>
        <p>Let’s log you in quickly</p>
        <TextField onChange={(e)=>setName(e.target.value)}  className='inp' id="standard-basic" label="Enter your name" variant="standard" />
        <TextField onChange={(e)=>setSurName(e.target.value)}  className='inp' id="standard-basic" label="Enter your surname" variant="standard" />
        <TextField onChange={(e)=>setTell(e.target.value)}  className='inp' id="standard-basic" label="Enter your phoneNumber" variant="standard" />
        <Button className='joiningButton' variant="contained" color="success" onClick={handleClick}>ADD</Button>
    </div>
    <img className="regisImg" src={RegisImg} alt="login img" />
</div>
  )
}

export default Regis