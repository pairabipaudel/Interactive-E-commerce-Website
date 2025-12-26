import React,{useState} from 'react'

import banner from './icon/banner.png'
import data_collection from './data_collection'
import {useNavigate} from 'react-router-dom'
import './App.css'
import Top from './Top'
import Bottom from './Bottom'

const App = () => {
  const [categorySelection, setCatagorySelection]=useState('all')
  const navigate=useNavigate();
 
  let filteredItem = data_collection.filter(item => categorySelection ==='all' || categorySelection ===item.category)
console.log(filteredItem.map(i => i.name))
  return (
    <div className='full-container'>
       <Top/>
    <div className='contaainer' >
    

      <div className="hero-banner">
        <img src={banner} alt="hero banner" />
      </div>
     
      <div className='selection-buttons'>
        <button onClick={()=>setCatagorySelection('all')}>All</button>
        <button onClick={()=> setCatagorySelection('women')}>Women</button>
        <button onClick={()=> setCatagorySelection('men')}>Men</button>
      </div>

      <div className='cloth_display_container'>
        {
            
   filteredItem.map(item =>
     (
    <div 
      className='each_cloth_container'
      onClick={() => navigate(`/detailproduct/${item.id}`)}
      key={item.id}
    >
     <div className='item_image' >
         <img src={item.img} alt={item.name} />
     </div>
     
      <p className='item_name'>{item.name}</p>
      <div className='item_description_container'>
          <p className='item_description'>{item.description}</p>
      </div>
      
      <p className='item_price'>$ {(item.price / 100).toFixed(2)}</p>
      <button className='add_cart'>Add to cart</button>
    </div>

  ))
  }
      </div>
     <Bottom/>
       
    </div>
    
    </div>
  )
}

export default App
