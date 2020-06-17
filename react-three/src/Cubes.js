import React, { useRef } from "react";
import { useFrame } from "react-three-fiber";

const Cubes = () => {
  const cubesArr = ["a", "b", "c"];
  const cubesRefs = cubesArr.map(() => useRef());

  const cubeMeshes = cubesRefs.map((ref) => ref.current);
  cubeMeshes = cubesArr.map(() => {
    return (
      <mesh
        position={[Math.random() * 2, Math.random() * 2, Math.random() * 2]}
      >
        <boxBufferGeometry
          attach="geometry"
          args={[Math.random() * 2, Math.random() * 2, Math.random() * 2]}
        ></boxBufferGeometry>
        <meshBasicMaterial
          attach="material"
          color={
            "rgb(" +
            Math.floor(Math.random() * 256) +
            "," +
            Math.floor(Math.random() * 256) +
            "," +
            Math.floor(Math.random() * 256) +
            ")"
          }
        ></meshBasicMaterial>
      </mesh>
    );
  });

  useFrame(() => {
    // cubesMeshes.forEach(function (value) {
    //   value.rotation.y += 0.1;
    // });
  });

  return <group position={[0, 0, 0]}>{cubeMeshes.current}</group>;
};

export default Cubes;
