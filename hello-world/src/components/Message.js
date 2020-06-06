// React State Implementstion
import React, { Component } from "react";

class Message extends Component {
  constructor() {
    super();
    this.state = {
      message: "Welcome",
    };
  }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.onSubscribe()}>Sunscribe</button>
      </div>
    );
  }

  onSubscribe() {
    this.setState({
      message: "Subscribed",
    });
  }
}

export default Message;
