import React from 'react';
import firstSectionImg from "../../images/first-section-img.webp"
import cashOnDeliveryImg  from "../../images/easyReturn.svg"
import shippingImg from "../../images/shippingIcon.svg"
import freeDeliveryImg from "../../images/cashDeliveryIcon.svg"
import playStore from "../../images/playStore.png";
import "./HomeFirstSection.css"

function HomeFirstSection() {
  return (
    <div className='home-firstSection'>
          <div className='firstSection-Cnt'>
            <h2>Lowest Prices Best Quality Shopping</h2>
            <div className='firstSection-feature'>
               <div className='firstSection-feature-item'>
               <div className='firstSection-feature-item-img'>
               <img src={freeDeliveryImg} alt="free-delivery-img" />
               </div> 
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
               <div className='download-app-home-button'>
            <img src={playStore} alt='playStore-img' />
            <span> Download the ShowMe App</span>
          </div>
          </div>
          <div className='firstSection-Img'>
            <img src={firstSectionImg} alt="first-section-img" />
          </div>
        </div>
  )
}

export default HomeFirstSection