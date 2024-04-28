import React, {useContext,} from 'react'
import { globalVariable } from '../../App'


function SingleProduct() {

    const {singleProductData} = useContext(globalVariable)

    console.log(singleProductData)
    console.log(localStorage.getItem("id"))

  return (
    <div className='singleProduct'>
    <div className='singleProductInner'>
        <div className='productLeft'>
    
        </div>
        <div className='productRight'>

        </div>
    </div>
    
     </div>
  )
}

export default SingleProduct