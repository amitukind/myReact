import React, { Component } from "react";
import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import JSXHello from "./components/JSXHello";
import Message from "./components/Message";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Greet nickname="Verma" />
        <Welcome celeb="SRK" />
        <JSXHello />
        <Message />
      </div>
    );
  }
}

export default App;
