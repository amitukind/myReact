import React, { useRef } from "react";
import { useFrame } from "react-three-fiber";

const Cubes = () => {
  const cubesArr = ["a", "b", "c"];
  const cubesRefs = useRef([]);

  const cubeMeshes = cubesArr.map((name, i) => {
    return (
      <mesh
        key={name}
        ref={(mesh) => (cubesRefs.current[i] = mesh)}
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
    // cubesRefs.current.forEach(function (mesh) {
    //   if (mesh) mesh.rotation.y += 0.1;
    // });
  });

  return <group position={[0, 0, 0]}>{cubeMeshes}</group>;
};

export default Cubes;
