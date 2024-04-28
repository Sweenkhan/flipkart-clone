import React, { useEffect, useState,} from 'react' 
import axios from 'axios'


function SingleProduct() {
 
    const [productDetail, setProductDetail] = useState({})
 
    useEffect(() => {
        axios.get(`http://localhost:8000/singleProduct/${localStorage.getItem("id")}`)
        .then((result) => { 
             setProductDetail(result.data.productDetail)
        })

    }, [])

  return (
    <div className='singleProduct'>
    { productDetail && <div className='singleProductInner'>
        <div className='productLeft'>
        <picture >
            <img width="260" src={productDetail.image} alt="productImage" />
        </picture>
        </div>
        <div className='productRight'>

        </div>
    </div>}
    
     </div>
  )
}

export default SingleProduct