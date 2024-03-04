import React from 'react';
import "./Home.css";
import HomeFirstSection from './homeFirstSection/HomeFirstSection';
import HomeSecondSection from './homeSecondSection/HomeSecondSection';
import HomeThirdSection from './homeThirdSection/HomeThirdSection';

function Home() {
  return (
    <div className='home'>
      <div className='homeContainer'>

         <HomeFirstSection />

         <div className='strait-line-section'>
          <div className='strait-line'></div>
          <span>Top Categories to choose from</span>
          <div className='strait-line'></div>
         </div>
         
         <HomeSecondSection />
         <HomeThirdSection />
         
      </div>
    </div>
  )
}

export default Home