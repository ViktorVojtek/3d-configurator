import React, { Suspense } from 'react';
import { Canvas } from 'react-three-fiber';
import Controls from './components/THREE/Controls';
import Ground from './components/THREE/Ground';
import Menu from './components/UI/Menu';
import Model from './components/THREE/Model';
import Loader from './components/UI/Loader';
import Title from './components/UI/Title';
import { StateProvider, useStore } from './utils/store';
import {
  ambientLightProps,
  cameraProps,
  controlsProps,
  groundProps,
  modelProps,
  pixelRatio,
  pointLightProps,
} from './utils/constants';

import * as data from '../assets/data.json';

const App: () => JSX.Element = () => {
  const {
    state: { matIdx },
  } = useStore();

  return (
    <>
      <Title name={data.title} />
      <Canvas
        camera={{ fov: cameraProps.fov, position: cameraProps.position }}
        colorManagement
        invalidateFrameloop
        shadowMap
        pixelRatio={window.devicePixelRatio || pixelRatio}
      >
        <StateProvider>
          <ambientLight intensity={ambientLightProps.intensity} />
          <pointLight
            position={pointLightProps.position}
            castShadow
            decay={pointLightProps.decay}
            shadow-mapSize-height={pointLightProps.shadowMapSize}
            shadow-mapSize-width={pointLightProps.shadowMapSize}
          />
          <Controls
            maxPolarAngle={controlsProps.maxPolarAngle}
            minPolarAngle={controlsProps.minPolarAngle}
            target={controlsProps.target}
            enableKeys
          />
          <Suspense fallback={<Loader />}>
            <Model
              data={{
                modelPath: data.modelPath,
                diffTexturePath: data.diffuseTexturePath[matIdx],
                normalTexturePath: data.normalTexturePath,
              }}
              position={modelProps.position}
              castShadow
            />
          </Suspense>
          <Ground
            name='Ground'
            receiveShadow
            position={groundProps.posiiton}
            rotation={groundProps.rotation}
          />
        </StateProvider>
      </Canvas>
      <Menu
        data={[
          { color: 'red', title: 'RED' },
          {
            color: 'green',
            image: 'https://scitechdaily.com/images/Carina-Nebula-2-scaled.jpg',
            title: 'GREEN',
          },
          { color: 'blue', title: 'BLUE' },
        ]}
      />
    </>
  );
};

export default App;
