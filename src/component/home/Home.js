import React from 'react'
import firstSectionImg from "../images/first-section-img.webp"
import cashOnDeliveryImg  from "../images/easyReturn.svg"
import shippingImg from "../images/shippingIcon.svg"
import freeDeliveryImg from "../images/cashDeliveryIcon.svg"
import "./Home.css";

function Home() {
  return (
    <div className='home'>
      <div className='homeContainer'>
        <div className='home-firstSection'>
          <div className='firstSection-Cnt'>
            <h2>Lowest Prices Best Quality Shopping</h2>
            <div className='firstSection-feature'>
               <div className='firstSection-feature-item'>
                <img src={freeDeliveryImg} alt="free-delivery-img" />
                <span>Free Delivery</span>
               </div>
               <div className='container-for-left-border'></div>
               <div className='firstSection-feature-item'>
                <img src={shippingImg} alt="cash-delivery-img" />
                <span>Cash on Delivery</span>
               </div>
               <div className='container-for-left-border'></div>
               <div className='firstSection-feature-item'>
                <img src={cashOnDeliveryImg} alt="easy-return-img" />
                <span>Easy Returns</span>
               </div>
            </div>
          </div>
          <div className='firstSection-Img'>
            <img src={firstSectionImg} alt="first-section-img" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home