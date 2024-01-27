import React from 'react'
import "./Hero.scss";
import heroImage from "../../assets/heroImage.png"
function Hero() {
  return (
    <div className='Hero'>
        <img className='heroImage' src={heroImage}alt="" />
        <div className="heroInfo">
       <h2>Discover Our New Collection</h2>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta 
        quibusdam ipsum eligendi voluptate, temporibus fugit nemo porro 
        possimus voluptates fuga rerum accusamus earum libero laborum
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta 
        quibusdam ipsum eligendi voluptate, temporibus fugit nemo porro 
        possimus voluptates fuga rerum accusamus earum libero laborum?</p>
        </div>
        
    </div>
  )
}

export default Hero