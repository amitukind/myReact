import React, { Component, Fragment } from "react";
import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import JSXHello from "./components/JSXHello";
import Message from "./components/Message";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";
import NameList from "./components/NameList";
import LifecycleA from "./components/LifecycleA";
import FragmentDemo from "./components/FragmentDemo";
import RefsDemo from "./components/RefsDemo";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Greet nickname="Verma" />
        <Welcome celeb="SRK" />
        <JSXHello />
        <Message />
        <FunctionClick />
        <ClassClick />
        <EventBind />
        <NameList></NameList>
        <LifecycleA />
        <FragmentDemo /> */}
        <RefsDemo />
      </div>
    );
  }
}

export default App;
