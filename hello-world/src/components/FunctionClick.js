import React from "react";

const FunctionClick = () => {
  function clicked() {
    console.log("Function Clicked");
  }

  return <button onClick={clicked}>FunctionButton</button>;
};

export default FunctionClick;
