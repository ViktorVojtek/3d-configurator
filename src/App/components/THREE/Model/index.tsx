import React from 'react';
import { useLoader, MeshProps } from 'react-three-fiber';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import { Texture, TextureLoader } from 'three';
import { DoubleSide, Mesh } from 'three';

interface ModelProps extends MeshProps {
  data: {
    modelPath: string;
    diffTexturePath: string;
    normalTexturePath?: string;
  };
}

const Model: (props: ModelProps) => JSX.Element | null = (props) => {
  const {
    data: { modelPath, diffTexturePath, normalTexturePath },
  } = props;

  const model = useLoader(FBXLoader, modelPath);
  const diffTexture = useLoader(TextureLoader, diffTexturePath);
  let normalTexture: Texture | undefined = undefined;

  if (normalTexturePath) {
    normalTexture = useLoader(TextureLoader, normalTexturePath);
  }

  return diffTexture ? (
    <mesh {...props} visible geometry={(model.children[0] as Mesh).geometry}>
      <meshStandardMaterial
        map={diffTexture}
        bumpScale={normalTexture ? 0.005 : 0}
        side={DoubleSide}
        attach='material'
      >
        {normalTexture && (
          <primitive
            attach='bumpMap'
            object={normalTexture}
            key='bump-prop-0'
          />
        )}
      </meshStandardMaterial>
    </mesh>
  ) : null;
};

export default Model;
