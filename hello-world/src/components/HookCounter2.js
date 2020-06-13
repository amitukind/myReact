import React, { useState } from "react";

function HookCounter2() {
  const initialCounter = 0;
  const [count, setCount] = useState(initialCounter);
  const incrementFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount((prevState) => prevState + 1);
    }
  };
  return (
    <div>
      Count : {count}
      {/* Bad Way: */}
      {/* <button onClick={() => setCount(initialCounter)}>ResetCounter</button>
      <button onClick={() => setCount(count + 1)}>IncrementCounter</button>
      <button onClick={() => setCount(count - 1)}>DecrementCounter</button>
      <button onClick={() => setCount(count + 5)}>Increment by 5</button> */}
      {/* Good Way: */}
      <button onClick={() => setCount(initialCounter)}>ResetCounter</button>
      <button onClick={() => setCount((prevState) => prevState + 1)}>
        IncrementCounter
      </button>
      <button onClick={() => setCount((prevState) => prevState - 1)}>
        DecrementCounter
      </button>
      <button onClick={incrementFive}>Increment by 5</button>
    </div>
  );
}

export default HookCounter2;
