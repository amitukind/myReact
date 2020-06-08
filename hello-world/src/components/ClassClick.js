import React, { Component } from "react";

class ClassClick extends Component {
  render() {
    return <button onClick={this.clickedClass}>ClassButton</button>;
  }
  clickedClass() {
    console.log("Class Clicked");
  }
  componentDidMount() {}
}

export default ClassClick;
