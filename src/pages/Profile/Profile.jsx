import "./Profile.scss";
import person from "../../assets/profileImg.webp";
import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import Textarea from '@mui/joy/Textarea';
function Profile() {
  let navigate=useNavigate();
    let [name,setName]=useState("");
    let [surname,setSurName]=useState("");
    let [tell,setTell]=useState("");
    function handleClick() {
      if(name=="yoz"){
        navigate('/');
      }else{
        navigate('/login');
      }
    }
  return (
    <div className='Profile'>
      <div className="profileInfo">
    <img className='ProfileImage' src={person} />
    <div className="ProfileText">
        <h1 className='title'>What is Lorem Ipsum?</h1>
         <p className='describtion'>
         welcome. in this section you can apply and find a
          solution to your problem. it will help you a lot. 
          you can save your time and of course claim your rights.
           it will ensure harmony with the people
         </p>
    </div>
    </div>
    <div className='Login'>
          <div className="LoginCheck">
              <h2>APPLICATION SUBMISSION</h2>
              <TextField onChange={(e)=>setName(e.target.value)}  className='inp' id="standard-basic" label="Enter your name" variant="standard" />
              <TextField onChange={(e)=>setSurName(e.target.value)}  className='inp' id="standard-basic" label="Enter your surname" variant="standard" />
              <Textarea className="textAria" minRows={3} />
              <Button className='checkingButton' variant="contained" color="success" onClick={handleClick}>Send</Button>
          </div>
      </div>
      <div className='Footer'>
      <div className="container Footer__inner"></div>
      <ul className='Footer__list'>
        <li className='list__item'>Professionalism </li>
        <li className='list__item'>Problem Solving</li>
        <li className='list__item'>Law</li>
        <li className='list__item'>Justice</li>
        <li className='list__item'>Time Management Skills</li>
        </ul>      
    </div>
</div>
  )
}

export default Profile