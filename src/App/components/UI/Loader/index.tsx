import React from 'react';
import { Html } from '@react-three/drei';

const Loader: () => JSX.Element = () => (
  <Html>
    <svg width='100' height='100'>
      <circle
        cx='50'
        cy='50'
        fill='none'
        stroke='#262323'
        strokeWidth='5'
        r='40'
        strokeDasharray='164.93361431346415 56.97787143782138'
      >
        <animateTransform
          attributeName='transform'
          type='rotate'
          repeatCount='indefinite'
          dur='1s'
          values='0 50 50;360 50 50'
          keyTimes='0;1'
        />
      </circle>
    </svg>
  </Html>
);

export default Loader;
