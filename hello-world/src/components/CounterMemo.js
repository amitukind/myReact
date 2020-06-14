import React, { useState } from "react";

function CounterMemo() {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

  const increment1 = () => {
    setCounter1(counter1 + 1);
  };

  const increment2 = () => {
    setCounter2(counter2 + 1);
  };

  const isEven = () => {
    let i = 0;
    while (i < 2000000000) i++;
    return counter1 % 2 === 0;
  };

  return (
    <div>
      <button onClick={increment1}>Counter1:{counter1}</button>
      <span>{isEven() ? "Even" : "Odd"}</span>
      <button onClick={increment2}>Counter2:{counter2}</button>
    </div>
  );
}

export default CounterMemo;
