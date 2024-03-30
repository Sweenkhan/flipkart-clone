import React, { useEffect } from 'react'
import axios from "axios"


function HomeProductSection() {

useEffect(() => {
    console.log("jii")
  axios.get("http://localhost:8000/allProducts")
  .then((result) => {
       console.log(result.data)
  }).catch((err) => {
       console.log(err)
  })
},[])

  return (
    <div>
      this is product page
    </div>
  )
}

export default HomeProductSection