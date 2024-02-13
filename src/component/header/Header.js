import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CloseIcon from '@mui/icons-material/Close';
import "./Header.css";


function Header() {

  const [searchInput, setSearchInput] = useState("");
  const [showDropDown, setShowDropDown] = useState(false);
  const [closeiconShow, setCloseiconShow] = useState(false)
    
 
  useEffect(() => {
    if(searchInput === ""){
      setShowDropDown(true) 
      setCloseiconShow(false)
    }else{
      setShowDropDown(false)
      setCloseiconShow(true)
    }
  },[searchInput])
    
  
 

  return (
    <header>
      <div className="header-container">
        <div className="header-logo-container">
          <Link to="/">ShowMe</Link>
        </div>
        <div className="search-container">
          <div className="search-container-inner">
            <div className="search-icon-container">
              <SearchIcon sx={{ fontSize: 32}} color="disabled" />
            </div>
            <input type="text" onChange={(e)=>setSearchInput(e.target.value)} 
            value={searchInput} 
            onMouseOver={() => setShowDropDown(true)}
            placeholder="Try Jeans, Shirt, Saree, Kurti" />
            <div onClick={()=> setSearchInput("")} className={`close-icon ${closeiconShow ? "show" : ""}`} ><CloseIcon sx={{ fontSize:28}} /></div>
          </div>
          <div className={`search-container-dropDown ${showDropDown ? "show" : ""}`} >
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
              <span>Become a Supplier</span>
            </div>
            <div className="container-for-left-border"></div>
            <div className="header-right-cont">
              <span>Newsroom</span>
            </div>
            <div className="container-for-left-border"></div>
            <div className="header-right-cont profile">
              <span><AccountCircleIcon /></span>
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
