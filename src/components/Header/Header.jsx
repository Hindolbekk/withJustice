import React from 'react';
import "./Header.scss";
import Button from '@mui/material/Button';
function Header() {
  return (
    <div className='Header'>
       <div className="headerHome">
        <label className='logo'>Justice Worrios</label>
        <ul className='list'>
          <li className='list__item'>
            <a href="#" >all</a>
          </li>
          <li className='list__item'>
            <a href="#"  >animals</a>
          </li>
          <li className='list__item'>
            <a href="#"  >sport</a>
          </li>
          <li><Button className='btnHeader' variant="contained" href="#contained-buttons">VISIT</Button></li>
          <li><Button className='btnHeader' variant="contained" href="#contained-buttons">REGISTRATION</Button></li>
          </ul>
          </div>
    </div>
  )
}

export default Header;