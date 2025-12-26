import React from 'react'
import {useParams} from 'react-router-dom'
import data_collection from './data_collection';
import './Detail_product.css'
import Bottom from './Bottom';
import Top from './Top';
import { useNavigate } from 'react-router-dom';

const Detail_product = () => {
  const {id}= useParams();
  const navigation =useNavigate();
  const filteredItem = data_collection.filter((item)=> item.id==id);
  return (
    <div className='full_container_detail'>
      <Top/>
      
      

    <div className='container_detail'>
      <div className='back_button_container' >
          <p onClick={()=>navigation('/')} className='back_detail'>Back</p>
      </div>

   {
       filteredItem.map((item)=>{
      return(<div className='detail_content'>
              <img src={item.img} alt="image" />
              <p className='item_name_detail'>{item.name}</p>
            <p className='item_description_detail'>{item.description} {item.description}{item.description}</p>
              

              <p className='item_price_detail'>${(item.price/100).toFixed(2)}</p>
        </div>)})
   }
 
    <div>
      <button className='add_to_cart_detail'>Add to cart</button>
    </div>

   </div>
  
   <Bottom/>
   </div>
  );
}

export default Detail_product
