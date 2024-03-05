import React from 'react'
import "./Products.css"


function Products() {
  return (
    <div className='products-container'>
    
    <h1>Products For You</h1>
    <div className='all-products-container'>
        <div className='products-filter'>
            <div className='sort-by'>Relevance</div>
            <div className='filters'></div>
        </div>
        <div className='products'></div>
    </div>
    </div>
  )
}

export default Products