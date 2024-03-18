import React from 'react'
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid'; 
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"; 
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import androidImg from "../../images/androidImg.png";
import istoreImg from "../../images/istoreImg.png";
import { Link } from 'react-router-dom';

function RightSection() {
  return (
    <div className="header-right">
            <div className="header-right-cont download-app-container">
              <div className="header-download-app"> 
              <span className="mobileIcon"><PhoneAndroidIcon /></span> 
              <span>Download App</span>
              </div> 

              <div className="download-app-dropDown">
                <h4 style={{opacity: "0.7"}}>Download From</h4>
                <div className="android-app-download">
                <img src={androidImg} alt="android-app-icon" className="android-app-icon"/>
                </div>
                <div className="ios-app-download">
                 <img src={istoreImg} alt="ios-app-icon" className="ios-app-icon"/>
                </div>
              </div>

            </div>
            <div className="container-for-left-border"></div>
            <div className="header-right-cont newsroom">
              <span>Newsroom</span>
            </div>
            <div className="container-for-left-border"></div>
            <div className="profile-cart-cont">
              <div className="profile-cont">
                <span className="profile-icon">
                  <AccountCircleIcon sx={{ fontSize: 30 }}/>
                </span>
                <span>Profile</span>
              </div>
              <div className="cart-cont">
                <span className="cart-icon">
                  <ShoppingCartIcon sx={{ fontSize: 30 }} />
                </span>
                <span><Link to="/cart">Cart</Link>  </span>
              </div>
            </div>
          </div>
  )
}

export default RightSection