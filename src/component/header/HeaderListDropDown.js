import React from 'react'
import "./HeaderDropDown.css"


function HeaderListDropDown() {


  return (
    <div className='header-secondSec-drop-cont'>
      <div className='header-secondSec-drop-items'>
        <div className='items'>
            <h3>Sarees</h3>
            <p>Silk Sarees</p>
            <p>Cotton Sarees</p>
            <p>Cotton Silk Sarees</p>
            <p>Chiffon Sarees</p>
            <p>Satin Sarees</p>
        </div>
        <div className='items'>
            <h3>Kurtis</h3>
            <p>All Kurtis</p>
            <p>Rayon Kutis</p>
            <p>Anarkali Kurtis</p>
            <p>Cotton Kurtis</p> 
        </div> 
        <div className='items'>
            <h3>Topwear</h3>
            <p>Tops</p>
            <p>Dresses</p>
            <p>Sweaters</p>
        </div>
        <div className='items'>
            <h3>BottomWear</h3>
            <p>Jeans</p>
            <p>jeggings</p>
            <p>Plazoos</p>
            <p>Shorts</p>
            <p>Skirts</p>
        </div>
        <div className='items'>
            <h3>Sleepwear</h3>
            <p>Nightsuits</p>
            <p>Babydolls</p>
            
        </div>
      </div>
     </div>
  )
}

export default HeaderListDropDown