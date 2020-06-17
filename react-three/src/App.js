import React from "react";
import "./App.css";
import { Canvas } from "react-three-fiber";
import Sphere from "./Sphere";
import Light from "./Light";
import { RGBAFormat } from "three";
import Cubes from "./Cubes";

function App() {
  return (
    <Canvas>
      <Cubes></Cubes>
    </Canvas>
  );
}

export default App;
