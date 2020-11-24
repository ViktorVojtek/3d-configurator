import React, { Suspense, useEffect, useState } from 'react';
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

type ModelDataType = {
  diffuseTexturePath: string[];
  modelPath: string;
  normalTexturePath: string;
  title: string;
};

const App: () => JSX.Element | null = () => {
  const {
    state: { itemIdx, matIdx },
  } = useStore();
  const [modelData, setModelData] = useState(({} as unknown) as ModelDataType);

  useEffect(() => {
    const handleSetModelData: () => void = () => {
      setModelData(data[itemIdx]);
    };

    handleSetModelData();
    return () => handleSetModelData();
  }, [itemIdx]);

  return Object.keys(modelData).length > 0 ? (
    <>
      <Title name={modelData.title} />
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
                modelPath: modelData.modelPath,
                diffTexturePath: modelData.diffuseTexturePath[matIdx],
                normalTexturePath: modelData.normalTexturePath,
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
  ) : null;
};

export default App;
