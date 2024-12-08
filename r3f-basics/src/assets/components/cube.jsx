/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */

import { MeshWobbleMaterial } from "@react-three/drei";
import { useState } from "react";

// Define Cube component with forwardRef
const Cube = ({ position, size, color }) => {

  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

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
        <torusKnotGeometry args={size} />
        <MeshWobbleMaterial factor={5} color={isHovered ? "orange" : color || "hotpink"}/>
      </mesh>
    </>
  );
};

export default Cube;
