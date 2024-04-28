import React, { useEffect, useState } from 'react'
import axios from "axios"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';  
import { useNavigate } from 'react-router-dom';
import "./Products.css"



function Products() {
 

const navigate = useNavigate()
const [products, setProducts] = useState([]) 
const [sortByValue, setSortByValue] = useState("Relevance");
const [showSortBy, setShowSortBy] = useState(false)

useEffect(() => { 
  axios.get("http://localhost:8000/allProducts")
  .then((result) => {
        if(result.data.status === 200){
          setProducts(result.data.products)
          console.log(result.data.products)
        }
  }).catch((err) => {
       console.log(err)
  })
},[])


// calculating discount with original price.
function calculateDiscountedPrice(originalPrice, discountPercentage) {
  var discountedPrice = originalPrice - (originalPrice * (discountPercentage / 100));
  return Math.floor(discountedPrice * 83);
}
 
// filtering the procut form dropdown.
function handleSortByClick(e){
  e.preventDefault()
  return showSortBy ? setShowSortBy(false) : setShowSortBy(true)
} 

function handleProductClick(e, product){
  e.preventDefault();
  localStorage.setItem("id", product._id) 
  navigate("/singleProduct")
}   

  return (
    <div className='productCnt'>
    
    <div className='productFilter'>
           <div className='productFilterList'>
             <div className='sortingCnt'>
              <div className='sortBy' onClick={(e) => handleSortByClick(e) }>
                  <p className='byTag'>Sort by:</p>
                  <p>{sortByValue}</p>
                   <p className="sortIcon">
                  {showSortBy ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon /> }
                   </p>  
              </div>
              <div className='sortingList' style={{display: showSortBy ? "block" : "none"}}>
                <p onClick={(e) => setSortByValue(e.target.innerText)}>Relevance</p>
                <p onClick={(e) => setSortByValue(e.target.innerText)}>Price (Low to High)</p>
                <p onClick={(e) => setSortByValue(e.target.innerText)}>Price (High to Low)</p>
              </div>
             </div>
           </div>
       </div>


       <div className='products'>

         {(products.length>0) && products.map((product, index) => { 
          return (
            <div key={index} className='productDiv' onClick={(e) => handleProductClick(e, product)}>
              <div className='productImgCnt'>
                <picture>
                  <img src={product.image} alt='productImg'/>
                </picture>
              </div>
              <div className='productDetail'> 

                <p>{(product.title.length > 20) ? `${product.title.substring(0, 20)}...` : product.title}</p>
                <h3> 
                <span>&#8377;</span>{calculateDiscountedPrice(product.price, product.discount)} 
                <span className='originalPrice'><span>&#8377;</span>{Math.floor(product.price * 83)} </span>
                <span className='discountSpan'>{`  ${product.discount}% off`}</span>
                </h3>
                 <p className="freeDelivery-btn">Free Delivery</p>
                <div className='customerReviews'>
                <p className='rating' style={{backgroundColor: product.rating.rate > 3 ? "green" : "rgb(244, 182, 25)"}}>{product.rating.rate} <span>&#9733;</span> </p> 
                 <p className='reviews'>{product.rating.count} Reviews</p>
                 </div> 
              </div>
            </div>
          )
         })

         }
       </div>
    </div>
  )
}

export default Products