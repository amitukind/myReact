import React, { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super();
    this.state = { message: "Hello" };
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    this.setState({ message: "Clicked" });
  }

  clickHandlerArrow = () => {
    this.setState({ message: "Clicked-clickHandlerArrow" });
  };
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* Will not work as this is not defined  - If not binded in constructor*/}
        <button onClick={this.clickHandler}>EventBind</button>

        {/* //Method 1 - arrow Functions */}
        <button
          onClick={() => {
            this.clickHandler();
          }}
        >
          EventBind
        </button>

        {/* Method 2 - bind*/}
        <button onClick={this.clickHandler.bind(this)}>EventBind</button>

        {/* Method 3- Use bind in the constructor as used */}
        <button onClick={this.clickHandler}>EventBind</button>

        {/* Method 4 - Just change the clickHandler function to arrow function  */}
        <button onClick={this.clickHandlerArrow}>EventBind</button>
      </div>
    );
  }
}

export default EventBind;
