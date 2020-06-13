import React, { useState, useEffect } from "react";

function HookEffectThree() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    document.title = "Counter " + counter;
  });

  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>Counter {counter}</button>
    </div>
  );
}

export default HookEffectThree;
