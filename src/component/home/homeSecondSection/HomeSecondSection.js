import React from 'react'
import "./HomeSecondSection.css";
import mensStoreImg from "../../images/mens-store.webp"
import kidssStoreImg from "../../images/kids-store.webp"
import womenStoreImg from "../../images/women-store.webp"


function HomeSecondSection() {
  return (
    <div className='home-secondSection'> 
      <h2>Be fashion forward</h2>
     <div className='be-fashion-forwardStore'>
      <div className='fashion-women-store'>
          <img src={womenStoreImg} alt='women-store' />
      </div>
      <div className='fashion-mens-store'>
       <div className='mens-store'>
         <img src={mensStoreImg} alt='mens-store'/>
       </div>
       <div className='kids-store'>
         <img src={kidssStoreImg} alt='kids-store'/>
       </div>
      </div>
     </div>
     
    </div>
  )
}

export default HomeSecondSection