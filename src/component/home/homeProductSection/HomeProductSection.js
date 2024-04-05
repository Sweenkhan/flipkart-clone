import React, { useEffect, useState } from 'react'
import axios from "axios"
import "./HomeProductSection.css"

function HomeProductSection() {

const [products, setProducts] = useState([]) 

useEffect(() => {
    console.log("jii")
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


function calculateDiscountedPrice(originalPrice, discountPercentage) {
  var discountedPrice = originalPrice - (originalPrice * (discountPercentage / 100));
  return discountedPrice;
}


function randomDiscount(discount){
 return discount[Math.floor(Math.random() * discount.length)]
}

  return (
    <div className='cart'>
       <div className='cartContainer'>

         {(products.length>0) && products.map((product, index) => {
          const gotDiscount = randomDiscount([10, 20, 30, 40]);
          return (
            <div key={index} className='productDiv'>
              <div className='productImgCnt'>
                <picture>
                  <img src={product.image} alt='productImg'/>
                </picture>
              </div>
              <div className='productDetail'> 

                <p>{(product.title.length > 20) ? `${product.title.substring(0, 20)}...` : product.title}</p>
                <h3> 
                ${calculateDiscountedPrice(product.price, gotDiscount).toFixed(2)} 
                <span className='originalPrice'>${product.price}</span>
                <span className='discountSpan'>{`  ${gotDiscount}% off`}</span>
                </h3>
                 <p className="freeDelivery-btn">Free Delivery</p>
                 <div className='customerReviews'>
                 <p className='rating'>{product?.rating?.rate}</p>
                 <p className='review'>{product?.rating?.count}</p>
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

export default HomeProductSection