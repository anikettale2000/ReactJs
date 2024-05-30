import React, { useState, useEffect, useCallback } from "react";

function CounterApp() {
  const [count, setCount] = useState(0);

  const incrementCounter = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  const decresmentCounter = useCallback(() => {
    setCount((prevCount) => prevCount - 1);
  }, []);

  useEffect(() => {
    console.log(`Count changed to: ${count}`);
  }, [count, incrementCounter, decresmentCounter]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={incrementCounter}>Increment</button>
      <button onClick={decresmentCounter}>Decrement</button>
    </div>
  );
}

export default CounterApp;
