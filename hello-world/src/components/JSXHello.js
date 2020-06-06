import React from "react";

const JSXHello = () => {
  // Return HTML Code with JSX
  //     return (
  //     <div>
  //       <h1>JSX Hello</h1>
  //     </div>
  //   );
  //Return HTML Code without JSX instead use JS
  return React.createElement(
    "div",
    null,
    React.createElement("h1", null, "JS Hello")
  );
};

export default JSXHello;
