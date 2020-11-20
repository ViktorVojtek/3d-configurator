import React, { useRef, useState } from 'react';
import { MeshProps } from 'react-three-fiber';
import { Mesh } from 'three';

const Box: (props: MeshProps) => JSX.Element = (props: MeshProps) => {
  // This reference will give us direct access to the mesh
  const mesh = useRef<Mesh>();
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  // Rotate mesh every frame, this is outside of React without overhead
  /* useFrame(() => {
    mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
  }); */

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
      onClick={() => {
        console.log('Clicked');
        setActive(!active);
      }}
      onPointerOver={(e) => setHover(true)}
      onPointerOut={(e) => setHover(false)}
    >
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  );
};

export default Box;
