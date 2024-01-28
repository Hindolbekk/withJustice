import React from 'react'
import "./Hero.scss";
import heroImage from "../../assets/heroImage.png"
function Hero() {
  return (
    <div className='Hero'>
        <img className='heroImage' src={heroImage}alt="" />
        <div className="heroInfo">
       <h2>The withJustice platform: </h2>
       <p>The purpose of the withJustice platform: Currently, in the Republic
         of Uzbekistan, the state provides assistance to the poor. Although some
          people do not need this assistance, 
        they appropriate these services by bribing the officials in charge..platform that 
        monitors and ensures that the state aid to low-income families 
        of Uzbekistan reaches its owners. In addition, they can apply
         online to the appropriate places 
        in case of lack of aid or in case of corruption.</p>
        </div>
        
    </div>
  )
}

export default Hero