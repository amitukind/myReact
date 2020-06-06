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
        <h1>{(this.state.message, this.test)}</h1>
        <button onClick={() => this.onSubscribe()}>Sunbcribe</button>
      </div>
    );
  }

  onSubscribe() {
    this.setState({
      message: "Subscribed",
    });
    this.test = 30;
  }
}

export default Message;
