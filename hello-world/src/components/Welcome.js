// A React Class component
import React, { Component } from "react";

class Welcome extends Component {
  render() {
    return <h2>Welcome Mr. {this.props.celeb} to the class</h2>;
  }
}

export default Welcome;
