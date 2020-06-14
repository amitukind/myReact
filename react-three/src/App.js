import React from "react";
import "./App.css";
import { Canvas } from "react-three-fiber";
import Sphere from "./Sphere";
import Light from "./Light";
import { RGBAFormat } from "three";

function App() {
  return (
    <Canvas>
      <Light brightness={10} color={"pink"} />
      <Sphere></Sphere>
    </Canvas>
  );
}

export default App;
