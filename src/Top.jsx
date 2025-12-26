import React from 'react'
import logo from './icon/logo.png'
import cart from './icon/cart.png'
import profile from './icon/profile.png'
import search from './icon/search.png'
import './Top.css'
import { useNavigate } from 'react-router-dom'

const Top = () => {
  
    const navigate=useNavigate();
    
  return (
    <div className='container'>
      
       <div className='logo-name'>
        <img src={logo} alt="logo" />
        <p>E commerce</p>
       </div>

       <div className='input-top'>
          <input type="text" placeholder='Search...'/>
          <img src={search} alt="search-icon" />
       </div>

       <div className='cart-profile'>
        <img className="cart-icon" src={cart} alt="cart icon" />
        <img className='profile-icon' src={profile} onClick={()=> navigate('/login') } alt="profile icon" />
       </div>
    </div>
  )
}

export default Top
