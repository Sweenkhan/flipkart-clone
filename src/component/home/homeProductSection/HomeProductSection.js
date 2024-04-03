import React, { useEffect, useState } from 'react'
import axios from "axios"
import "./HomeProductSection.css"

function HomeProductSection() {

const [products, setProducts] = useState([])
let discount = [10, 20, 30, 40]

useEffect(() => {
    console.log("jii")
  axios.get("http://localhost:8000/allProducts")
  .then((result) => {
        if(result.data.status === 200){
          setProducts(result.data.products)
        }
  }).catch((err) => {
       console.log(err)
  })
},[])

  return (
    <div className='cart'>
       <div className='cartContainer'>

         {(products.length>0) && products.map((product, index) => {
          return (
            <div key={index} className='productDiv'>
              <div className='productImgCnt'>
                <picture>
                  <img src={product.image} alt='productImg'/>
                </picture>
              </div>
              <div className='productDetail'>
                <p>{(product.title.length > 20) ? `${product.title.substring(0, 20)}...`: product.title}</p>
                 <p className="freeDelivery-btn">free delivery</p>
                <h3>${product.price}<span className='discountSpan'>{`  ${discount[Math.floor(Math.random() * discount.length)]}% off`}</span></h3>
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