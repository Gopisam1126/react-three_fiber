/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */

import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react"

const Cube = ({position, size, color}) => {
    const ref = useRef();
    const [isHovered, setIsHovered] = useState(false);
    const [isClicked, setIsClicked] = useState(false);

    useFrame((state, delta) => {
        const speed = isHovered ? 2 : 0.5;
        ref.current.rotation.x += delta * speed;
        ref.current.rotation.y -= delta * speed;
        ref.current.position.z = Math.sin(state.clock.elapsedTime) * 2
    });
    return <>
        <mesh
            position={position}
            ref={ref}
            onPointerEnter={(e) => (e.stopPropagation(), setIsHovered(true))}
            onPointerLeave={() => setIsHovered(false)}
            onClick={() => setIsClicked(!isClicked)}
            scale={isClicked ? 1.5 : 1}
        >
            <boxGeometry args={size}/>
            <meshStandardMaterial color={isHovered ? "orange" : "green"}/>
        </mesh>
    </>
}

export default Cube