import React, { useState, useEffect } from "react";

function HookEffectThree() {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    document.title = "Counter " + counter;
    console.log("Setting Counter");
  }, [counter]); // Second parameter is an array of variables that needs to be checked for change before executing Effect Hook

  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>Counter {counter}</button>
      Name : {name}
      <input
        type="text"
        onChange={(e) => {
          setName(e.target.value);
        }}
      ></input>
    </div>
  );
}

export default HookEffectThree;
