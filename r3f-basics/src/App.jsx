/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { Canvas, useFrame } from "@react-three/fiber";
import "./assets/compStyles/common.css";
import Geometry from "./assets/components/cube";
import { useRef } from "react";
import { OrbitControls, useHelper } from "@react-three/drei";
import {
  DirectionalLightHelper,
  HemisphereLightHelper,
  PointLightHelper,
  SpotLightHelper,
} from "three";
import { RectAreaLightHelper } from "three/examples/jsm/Addons.js";

const RotateGroup = ({ children }) => {
  const reference = useRef();

  // useFrame((state, delta) => {

  //   reference.current.rotation.y += delta;
  //   reference.current.rotation.z -= delta;
  //   reference.current.position.x = Math.sin(state.clock.elapsedTime) * 2
  // });

  return (
    <group ref={reference} position={[0, -0.1, 0]}>
      {children}
    </group>
  );
};

const Scene = () => {
  // const helperRef = useRef();
  // useHelper(helperRef, SpotLightHelper, 1, "orange");
  // useHelper(helperRef, HemisphereLightHelper, 1, "white");
  // useHelper(helperRef, RectAreaLightHelper, 1, "white");

  // useHelper(helperRef, DirectionalLightHelper, 1, "white");

  return (
    <>
      <directionalLight position={[-2, 2, 7]} intensity={2} castShadow />
      {/* <spotLight 
        color="yellow" 
        intensity={10} 
        position={[2, 3, 3]} 
        angle={Math.PI / 8} 
        penumbra={0.8} 
        castShadow 
      /> */}
      {/* <hemisphereLight
        skyColor="lightblue"
        groundColor="brown"
        intensity={0.6}
        ref={helperRef}
        position={[1, 2, 3]}
      /> */}
      {/* <rectAreaLight
        color="yellow"
        intensity={10}
        position={[0, 2, 4]}
        width={2}
        height={2}
      /> */}
      <ambientLight intensity={0.1} />

      <RotateGroup>
        <Geometry position={[0, 0, 0]} color="hotpink" size={[2, 2, 2]} />
      </RotateGroup>
      <OrbitControls autoRotate={false} />
    </>
  );
};

function App() {
  return (
    <Canvas
      style={{
        backgroundColor: "#000",
      }}
    >
      <Scene />
    </Canvas>
  );
}

export default App;
