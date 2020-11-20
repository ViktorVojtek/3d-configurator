import React, { useEffect, useRef } from 'react';
import { extend, useThree, ReactThreeFiber } from 'react-three-fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      orbitControls: ReactThreeFiber.Object3DNode<
        OrbitControls,
        typeof OrbitControls
      >;
    }
  }
}

extend({ OrbitControls });

const Controls: (props: any) => JSX.Element = (props) => {
  const { camera, gl, invalidate } = useThree();
  const ref = useRef<OrbitControls | undefined>(undefined);

  useEffect(() => {
    ref.current?.update();
    ref.current?.addEventListener('change', invalidate);

    () => ref.current?.removeEventListener('change', invalidate);
  }, []);

  return <orbitControls ref={ref} args={[camera, gl.domElement]} {...props} />;
};

export default Controls;
