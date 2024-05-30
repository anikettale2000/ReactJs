import React from 'react'
import {useDispatch} from 'redux'


function Product1() {

    console.log("Render Product 2");
    const dispacth = useDispatch()
    const increment = () => {
        dispacth({type: "increment" })
    }

  return (
    <button onClick={increment}>Remove Product</button>
  )
}

export default Product1