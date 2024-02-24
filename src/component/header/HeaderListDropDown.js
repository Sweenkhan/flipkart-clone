import React from 'react'
import "./HeaderDropDown.css"


function HeaderListDropDown({listNameValue, showOrNot, changeOnList}) {
  
  function handleMouseEnter(){ 
    console.log("good one")
  }

  return (
    <div className='header-secondSec-drop-cont' onMouseEnter={handleMouseEnter}>
      <div  
      className= {`header-secondSec-drop-items ${listNameValue && "Women" && showOrNot ? "women" : "" }`}>
        <div className='item'>
            <h3>Sarees</h3>
            <p>Silk Sarees</p>
            <p>Cotton Sarees</p>
            <p>Cotton Silk Sarees</p>
            <p>Chiffon Sarees</p>
            <p>Satin Sarees</p>
        </div>
        <div className='item'>
            <h3>Kurtis</h3>
            <p>All Kurtis</p>
            <p>Rayon Kutis</p>
            <p>Anarkali Kurtis</p>
            <p>Cotton Kurtis</p> 
        </div> 
        <div className='item'>
            <h3>Topwear</h3>
            <p>Tops</p>
            <p>Dresses</p>
            <p>Sweaters</p>
        </div>
        <div className='item'>
            <h3>BottomWear</h3>
            <p>Jeans</p>
            <p>jeggings</p>
            <p>Plazoos</p>
            <p>Shorts</p>
            <p>Skirts</p>
        </div>
        <div className='item'>
            <h3>Sleepwear</h3>
            <p>Nightsuits</p>
            <p>Babydolls</p>
        </div>
      </div>
      <div className= {`header-secondSec-drop-items ${listNameValue && "Men" && showOrNot ? "men" : "" }`}>
        <div className='item'>
            <h3>Top Wear</h3>
            <p>All Top Wear</p>
            <p>T-Shirts</p>
            <p>Shirts</p>
        </div>
        <div className='item'>
            <h3>Bottom Wear</h3>
            <p>Track Pants</p>
            <p>Jeans</p>
            <p>Trousers</p> 
        </div> 
        <div className='item'>
            <h3>Men Accesssories</h3>
            <p>All Men Accesssories</p>
            <p>Watches</p>
            <p>Belts</p>
            <p>Wallets</p>
            <p>Jewellery</p>
            <p>Sunglasses</p>
            <p>Bags</p>
        </div>
        <div className='item'>
            <h3>Men Footwear</h3>
            <p>Casual Shoes</p>
            <p>Sports Shoes</p>
            <p>Sandals</p>
            <p>Formal Shoes</p>
            <p>Snickers</p>
        </div>
        <div className='item'>
            <h3>Ethnic Wear</h3>
            <p>Men Kurtas</p>
            <p>Ethnic Jacket</p>
        </div>
      </div>
     </div>
  )
}

export default HeaderListDropDown