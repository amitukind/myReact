// React State Implementstion
import React, { Component } from "react";

class Message extends Component {
  constructor() {
    super();
    this.state = {
      message: "Welcome",
    };
    this.test = 20;
  }
  render() {
    return (
      <div>
        <h1>{this.state.message + this.test}</h1>
        <button onClick={() => this.onSubscribe()}>Subscribe</button>
      </div>
    );
  }

  onSubscribe() {
    this.setState(
      {
        message: "Subscribed",
      },
      () => {
        console.log(
          "Value changed to message " + this.state.message + "test " + this.test
        );
      }
    );
    this.test = 30; //will be only reflected on setState call so always use with that
    //this.state.message = "Amit";  Not Recommended as React will not get its information about update always use setState
    //console.log(this.state.message + this.test);
  }
}

export default Message;
