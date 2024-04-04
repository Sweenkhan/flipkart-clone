import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; 
import "./Header.css"; 
import "./HeaderSecondSection.css";
import {SearchIcon, ClearIcon, BeautyList, MensList, WomensList, BagsAndFootwearList, JewelleryList, ElectronicsList, KitchelList, RightSection} from  "./importFilesForHeader.js"

 
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
              onMouseOver={() => (searchInput === "")&& setShowDropDown(true)}
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
          <h4 style={{width: "100%", textAlign: "center", paddingBottom: "5px"}}>Popular Searches</h4>
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
       <RightSection />  
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
        <div className="header-second-section-item beauty-list">
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
        <div className="header-second-section-item home-list">
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
