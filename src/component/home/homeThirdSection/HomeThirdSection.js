import React from 'react'
import "./HomeThirdSection.css"
import homeDecore from "../../images/homeDecore.webp"
import kitchenImage from "../../images/kitchenImage.webp"
import healthCare from "../../images/healthCare.webp"

function HomeThirsSection() {
  return (
    <div className='home-thirdSection'>
    
    <div className='esentialStore-cnt'>
       
      <div className='esentialStore'>
        <div className='esentialStore-item'>
        <img src={homeDecore} alt='homeDecore'/>
        <button>Home Decor</button>
        </div>
        <div className='esentialStore-item'>
        <img src={kitchenImage} alt='kitchen' />
        <button>Kitchen</button>
        </div>
        <div className='esentialStore-item'>
        <img src={healthCare} alt='healthcare'/>
        <button>HealthCare</button></div>
      </div>
      <div className='esentialBtn'>
        <h2>Essentials</h2>
        <button>View All</button>
      </div>
    </div>
    <div className='covering-extra-part'></div>
     </div>
  )
}

export default HomeThirsSection