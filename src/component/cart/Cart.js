import React from 'react'
import cartImg from "../images/cartImg.png"
import { Link } from 'react-router-dom';
import "./Cart.css"


function Cart() {
  return (
    <div className='cart'>
        <div className='container'>
            <div className='cartHeader'>
              
            </div>
            <div className='emptyCartCont'>
            <picture>
                <img src={cartImg} alt='emptyCartImg' />
            </picture>
            <h3>Your cart is empty</h3>
            <div className='viewProductCnt'><Link to="/" >View Products</Link> </div>
            </div>
        </div>
    </div>
  )
}

export default Cart;