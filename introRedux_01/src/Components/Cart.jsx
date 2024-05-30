import React from 'react'
import {useSelector} from 'redux'

function Cart() {

    console.log("Render Cart");
    const count = useSelector( function (state){
        return state.count;
    } );


  return (
    <div>{count}</div>
  )
}

export default Cart