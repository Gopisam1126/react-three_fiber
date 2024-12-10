/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */

import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import * as THREE from "three";

// Define Cube component with forwardRef
const Geometry = ({ position, size, color }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const materialRef = useRef();

  useFrame((state) => {
    // Animate the time uniform
    materialRef.current.uniforms.time.value = state.clock.elapsedTime;
  });

  const vertexShaderCode = `
  void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

  const fragmentShaderCode = `
  // fragmentShaderCode with gradient effect
  uniform vec3 colorStart;
  uniform vec3 colorEnd;
  uniform float time;

  void main() {
    float gradient = (sin(time) + 1.0) * 0.5; // Animate gradient
    vec3 color = mix(colorStart, colorEnd, gradient); // Interpolate between two colors
    gl_FragColor = vec4(color, 1.0);
  }
`;

  // Attach the light helper using the helperRef
  return (
    <>
      <mesh
        position={position}
        onPointerEnter={(e) => {
          e.stopPropagation();
          setIsHovered(true);
        }}
        onPointerLeave={() => setIsHovered(false)}
        onClick={() => setIsClicked(!isClicked)}
        scale={isClicked ? 1.5 : 1}
      >
        {/* <boxGeometry args={size} /> */}
        <sphereGeometry args={[1, 32, 32]} />
        {/*[Radius, Width Segments, Height Segments]. */}
        {/* <planeGeometry args={[3, 3]} />  */}
        {/* [Width, Height]. */}
        {/* <cylinderGeometry args={[1, 1, 3, 32]} /> [Top Radius, Bottom Radius, Height, Radial Segments]. */}
        {/* <torusGeometry args={[2, 0.5, 16, 100]} /> [Radius, Tube Radius, Radial Segments, Tubular Segments]. */}
        {/* <coneGeometry args={[1, 2, 100]} /> [Radius, Height, Radial Segments]. */}
        {/* <torusKnotGeometry args={[1, 0.4, 100, 16]} /> [Radius, Tube Radius, Tubular Segments, Radial Segments]. */}
        {/* <circleGeometry args={[2, 64]} /> [Radius, Segments]. */}
        {/* <ringGeometry args={[1, 2, 32]} /> [Inner Radius, Outer Radius, Segments]. 2D */}
        {/* <dodecahedronGeometry args={[1, 0]} /> [Radius, Detail]. */}

        {/* Materials */}

        {/* <meshStandardMaterial
          color={isHovered ? "orange" : color || "hotpink"}
          metalness={3}
          roughness={1}
        /> */}
        {/* <meshPhongMaterial
          color="red"
          specular="yellow"
          shininess={50}
        /> */}
        {/* <meshLambertMaterial color="green" /> */}
        {/* <meshPhysicalMaterial
          color="red"
          clearcoat={1}
          reflectivity={0.5}
        /> */}
        {/* <meshToonMaterial color="red" /> */}
        {/* <meshDepthMaterial /> */}
        {/* <pointsMaterial color="red" size={0.1} /> */}
        <shaderMaterial
          ref={materialRef}
          vertexShader={vertexShaderCode}
          fragmentShader={fragmentShaderCode}
          uniforms={{
            colorStart: { value: new THREE.Color("blue") },
            colorEnd: { value: new THREE.Color("red") },
            time: { value: 0 },
          }}
        />
      </mesh>
    </>
  );
};

export default Geometry;
