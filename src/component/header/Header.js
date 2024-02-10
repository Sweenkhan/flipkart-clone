import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {

  function showDropDown(){

  }

  return (
    <header>
      <div className="header-container">
        <div className="header-logo-container">
          <Link to="/">ShowMe</Link>
        </div>
        <div className="search-container">
          <div className="search-container-inner">
            <div className="search-icon-container"></div>
            <input type="text" placeholder="Try Jeans, Shirt, Saree, Kurti" onClick={showDropDown}/>
          </div>
          <div className="search-container-dropDown">
             <p>Kurti</p>
             <p>Saree</p>
             <p>Jeans</p>
             <p>Shirt</p>
             <p>T-Shirt</p>
             <p>Hoddy</p>
          </div>
        </div>
        <div className="nav-container">
          <div className="header-right">
            <div className="header-right-cont">
              <span>Download App</span>
            </div>
            <div className="container-for-left-border"></div>
            <div className="header-right-cont">
              <span>Become a Supplier</span>
            </div>
            <div className="container-for-left-border"></div>
            <div className="header-right-cont">
              <span>Newsroom</span>
            </div>
            <div className="container-for-left-border"></div>
            <div className="header-right-cont">
              <span>Profile</span>
            </div>
          </div>
        </div>
      </div>
      <div className="container-for-border"></div>

      <div className="container-for-border"></div>
    </header>
  );
}

export default Header;
