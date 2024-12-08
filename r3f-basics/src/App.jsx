/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { Canvas, useFrame } from '@react-three/fiber';
import "./assets/compStyles/common.css"
import Cube from './assets/components/cube';
import { useRef } from 'react';
import { OrbitControls, useHelper } from '@react-three/drei';
import { DirectionalLightHelper } from 'three';

const RotateGroup = ({children}) => {
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
}

const Scene = () => {
  // const helperRef = useRef();

  // useHelper(helperRef, DirectionalLightHelper, 1, "white");

  return (
    <>
      <directionalLight position={[0, 2, 5]} intensity={1} />
      <ambientLight intensity={0.2}/>
      
      <RotateGroup>
        <Cube position={[0, 0, 0]} color="hotpink" size={[5, 0.2, 1000, 60]} />
      </RotateGroup>
      <OrbitControls autoRotate={true} />
    </>
  )
}

function App() {

  return (
    <Canvas style={{
      backgroundColor: "#000"
    }}>
      <Scene/>
    </Canvas>
  );
}

export default App;
