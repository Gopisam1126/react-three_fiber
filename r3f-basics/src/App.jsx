/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { Canvas, useFrame } from '@react-three/fiber';
import "./assets/compStyles/common.css"
import Cube from './assets/components/cube';
import { useRef } from 'react';

const RotateGroup = ({children}) => {
  const reference = useRef();

  useFrame((state, delta) => {
    
    reference.current.rotation.y += delta;
    reference.current.rotation.z -= delta;
    reference.current.position.x = Math.sin(state.clock.elapsedTime) * 2
  });

  return (
    <group ref={reference} position={[0, -0.1, 0]}>
      {children}
    </group>
  );
}

function App() {

  return (
    <Canvas style={{
      backgroundColor: "#000"
    }}>
      <directionalLight position={[0, 5, 5]} intensity={1} />
      <ambientLight intensity={0.8}/>
      
      <RotateGroup>
        <Cube position={[1, 0, 0]} color="green" size={[1, 1, 1]} />
        <Cube position={[-1, 0, 0]} color="green" size={[1, 1, 1]} />
        <Cube position={[1, 2, 0]} color="green" size={[1, 1, 1]} />
        <Cube position={[-1, 2, 0]} color="green" size={[1, 1, 1]} />
      </RotateGroup>
    </Canvas>
  );
}

export default App;
