import React, { Component } from "react";
import LifecycleB from "./LifecycleB";

class LifecycleA extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Amit Verma",
    };
    console.log("LifecycleA Constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifecycleA getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("LifecycleA componentDidMount");
  }

  shouldComponentUpdate() {
    console.log("Lifecycle A shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("Lifecycle A getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate() {
    console.log("Lifecycle A componentDidUpdate");
  }

  changeState = () => {
    this.setState({
      name: "Verma",
    });
  };

  render() {
    console.log("LifecycleA render");
    return (
      <div>
        <div>LifecycleA</div>
        <button onClick={this.changeState}>Change State</button>
        <LifecycleB />
      </div>
    );
  }
}

export default LifecycleA;
