import React from 'react'
import tiktok from './icon/tiktok.png'
import discord from './icon/discord.png'
import facebook from './icon/facebook.png'
import './Bottom.css'
const Bottom = () => {
  return (
    <div className='container-bottom'>
       <div className='bottom-contactus' >
        <p>Contact Us:</p>
        <div className='bottom-logo'>
           <img src={tiktok} alt="tiktok icon" />
            <img src={discord} alt="discord icon" />
            <img src={facebook} alt="facebook icon" />
        </div>

        <div className='text-bottom'>
        <p>Lorem ipsum dolor sit amet,  magnam aperiam ullam velit asperiores, id iste sapiente modi ut.</p>
       </div>
        
       </div>

       
    </div>
  )
}

export default Bottom
