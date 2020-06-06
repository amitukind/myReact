import React, { Component } from "react";
import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import JSXHello from "./components/JSXHello";
import Message from "./components/Message";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Greet nickname="Verma" />
        <Welcome celeb="SRK" />
        <JSXHello />
        <Message />
        <FunctionClick />
        <ClassClick />
      </div>
    );
  }
}

export default App;
