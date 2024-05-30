import React from 'react'
import {useDispatch} from 'redux'

function Product2() {

    console.log("Render Product 2");
    const dispatch = useDispatch();
    const decrement = () => {
        // while dispatching an action {type: mandatory, paylaod: optional}
        dispatch({ type: "decrement" , payload:3})
    }

  return (
    <button onClick={decrement}>Remove Product</button>
  )
}

export default Product2