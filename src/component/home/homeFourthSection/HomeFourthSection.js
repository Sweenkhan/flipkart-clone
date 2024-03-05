import React from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import "./HomeFourthSection.css"

function HomeFourthSection() {
  return (
    <div className='home-fourthSection'>
    <div className='fourthSection-cnt'>
      <h2>Register as a ShowMe Supplier</h2>
      <p>Sell your products to crores of customers at 0% commission</p>
      <div className='fourthSection-items'>
        <div className='fourthSection-item first-item'>
        <span><CheckCircleIcon color='success'/></span>
        <span>Grow your bussiness 10x</span>
        </div>
        <div className='fourthSection-item'>
        <span><CheckCircleIcon color='success'/></span>
        <span>Enjoy 100% Profit</span>
        </div>
        <div className='fourthSection-item last-item'>
        <span><CheckCircleIcon color='success'/></span>
        <span>Sell all over india</span>
        </div>
      </div>
      <button>Sign Up Now</button>
    </div>
     </div>
  )
}

export default HomeFourthSection