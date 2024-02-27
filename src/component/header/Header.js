import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ClearIcon from "@mui/icons-material/Clear";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"; 
import BeautyList from "./dropDownforSecondSection/BeautyList";
import MensList from "./dropDownforSecondSection/MensList";
import WomensList from "./dropDownforSecondSection/WomensList";
import BagsAndFootwearList from "./dropDownforSecondSection/BagsAndFootwearList";
import JewelleryList from "./dropDownforSecondSection/JewelleryList";
import ElectronicsList from "./dropDownforSecondSection/ElectronicsList";
import KitchelList from "./dropDownforSecondSection/KitchenList"
import "./Header.css";


function Header() {
  const [searchInput, setSearchInput] = useState("");
  const [showDropDown, setShowDropDown] = useState(false);
  const [cleariconShow, setCleariconShow] = useState(false);
 

  // clear search input on condition and dropDown show in search-bar
  useEffect(() => {
    if (searchInput === "") {
      setShowDropDown(true);
      setCleariconShow(false);
    } else {
      setShowDropDown(false);
      setCleariconShow(true);
    }
  }, [searchInput]);



  return (
    <div className="header">
      <div className="header-container">
        <div className="header-logo-container">
          <Link to="/">ShowMe</Link>
          <span className="logoDesigenBottom"></span>
        </div>
        <div className="search-container">
          <div className="search-container-inner">
            <div className="search-icon-container">
              <SearchIcon sx={{ fontSize: 32 }} color="disabled" />
            </div>
            <input
              type="text"
              onChange={(e) => setSearchInput(e.target.value)}
              value={searchInput}
              onMouseOver={() => setShowDropDown(true)}
              placeholder="Try Jeans, Shirt, Saree, Kurti"
            />
            <div
              onClick={() => setSearchInput("")}
              className={`clear-icon ${cleariconShow ? "show" : ""}`}
            >
              <ClearIcon sx={{ fontSize: 26 }} />
            </div>
          </div>
          <div
            className={`search-container-dropDown ${
              showDropDown ? "show" : ""
            }`}
          >
            <p>Kurti</p>
            <p>Saree</p>
            <p>Jeans</p>
            <p>Shirt</p>
            <p>T-Shirt</p>
            <p>Hoddy</p>
            <p>Jacket</p>
            <p>Shoes</p>
            <p>Top</p>
            <p>Suit</p>
          </div>
        </div>
        <div className="nav-container">
          <div className="header-right">
            <div className="header-right-cont">
              <span>Download App</span>
            </div>
            <div className="container-for-left-border"></div>
            <div className="header-right-cont">
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
                <span>Cart</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-for-border"></div>
      <div className="header-second-section">
        <div className="header-second-section-item" >
          <span>Women</span>
          <WomensList />
        </div>
        <div className="header-second-section-item">
          <span>Men</span>
          <MensList />
        </div> 
        <div className="header-second-section-item">
          <span>Beauty & Health</span>
          <BeautyList />
        </div>
        <div className="header-second-section-item">
          <span>Jewellery & Accesssories</span>
          <JewelleryList />
        </div> 
        <div className="header-second-section-item">
          <span>Electronics</span>
          <ElectronicsList />
        </div>
        <div className="header-second-section-item">
          <span>Home & Kitchen</span>
          <KitchelList />
        </div>
        <div className="header-second-section-item">
          <span>Bags & Footwear</span>
          <BagsAndFootwearList />
        </div>
      </div>  
      <div className="container-for-border"></div>
    </div>
  );
}

export default Header;
