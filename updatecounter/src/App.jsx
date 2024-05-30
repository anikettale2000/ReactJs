import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(10); // useState hook is used to update the UI state of each variable
  // provides a way to declare state variables and update them within functional components, enabling them to manage their own state
  let AddValue = () => {
    if (counter < 20) {
      counter = counter + 1;
      setCounter(counter);
    }
    console.log("Clicked", counter);
  };

  let RemoveValue = () => {
    if (counter > 0) {
      counter = counter - 1;
      setCounter(counter);
    }
  };

  return (
    <>
      <h1>Aniket</h1>
      <h2>Counter Value = {counter}</h2>

      <button onClick={AddValue}>Add Value : {counter}</button>

      <span> </span>

      <button onClick={RemoveValue}>Remove Value : {counter}</button>
    </>
  );
}

export default App;
