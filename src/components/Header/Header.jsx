import React from 'react';
import "./Header.scss";
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
function Header() {
  let navigate=useNavigate();
  
  function navigateRegis() {
      navigate('/registiration');
} 
function navigateLogin() {
    navigate('/login');
} 
  return (
    <div className='Header'>
       <div className="headerHome">
        <label className='logo'>Law with Justice</label>
        <ul className='list'>
          <li className='list__item'>
            <a href="#" >About</a>
          </li>
          <li className='list__item'>
            <a href="#" >Social Benefits</a>
          </li>
          <li className='list__item'>
            <a href="#"  >Goal</a>
          </li>
          <li><Button className='btnHeader' onClick={navigateLogin} variant="contained" href="#contained-buttons">VISIT</Button></li>
          <li><Button className='btnHeader' onClick={navigateRegis} variant="contained" href="#contained-buttons">REGISTRATION</Button></li>
          </ul>
          </div>
    </div>
  )
}

export default Header;