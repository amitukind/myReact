import React from "react";
import "./App.css";
import { Canvas } from "react-three-fiber";
import Sphere from "./Sphere";
import Light from "./Light";

function App() {
  return (
    <Canvas>
      <Light brightness={10} color={"white"} />
      <Sphere></Sphere>
    </Canvas>
  );
}

export default App;
