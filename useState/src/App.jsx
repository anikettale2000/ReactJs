import { useState } from "react"
import React from "react"
import CounterApp from "./components/CounterApp";

function App() {
   const [x , setX] = useState(0);
  function update(){
    setX(x => 10);
  }
console.log(x);
  return (
    <>
      {/* <div>update counter {x}</div>
      <button onClick={update}>Press</button> */}
      <CounterApp/>
    </>
  )
}

export default App
