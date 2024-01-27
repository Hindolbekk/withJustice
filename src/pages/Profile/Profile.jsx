import React from 'react';
import "./Profile.scss";
import person from "../../assets/personImg.svg";
function Profile() {
  return (
    <div className='Profile'>
    <img className='ProfileImage' src={person} />
    <div className="ProfileText">
        <h1 className='title'>What is Lorem Ipsum?</h1>
         <p className='describtion'>
         Lorem Ipsum is simply dummy text of the printing and typesetting industry.
         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
         when an unknown printer took a galley of type and scrambled it to make a type
         specimen book.
         </p>
    </div>
</div>
  )
}

export default Profile