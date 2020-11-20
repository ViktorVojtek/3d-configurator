import React, { useRef } from 'react';
import { MeshProps } from 'react-three-fiber';
import { Mesh } from 'three';

const Ground: (props: MeshProps) => JSX.Element = (props) => {
  const mesh = useRef<Mesh>();

  return (
    <mesh ref={mesh} {...props}>
      <planeBufferGeometry args={[5, 5, 5]} />
      <shadowMaterial color={0x000000} opacity={0.35} />
    </mesh>
  );
};

export default Ground;
