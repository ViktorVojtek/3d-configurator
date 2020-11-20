export const ambientLightProps: { intensity: number } = { intensity: 0.55 };
export const cameraProps: { fov: number; position: [x: number, y: number, z: number] } = { fov: 30, position: [0, 0, 10]};
export const pixelRatio: number = 1;
export const pointLightProps: { decay: number; position: [x: number, y: number, z: number]; shadowMapSize: number } = { decay: 2, position: [10, 20, 15], shadowMapSize: 4096 };

export const controlsProps: { maxPolarAngle: number; minPolarAngle: number; target: [x: number, y: number, z: number] } = { maxPolarAngle: Math.PI / 2.05, minPolarAngle: 0, target: [0, 0.85, 0] };

export const modelProps: { position: [x: number, y: number, z: number] } = { position: [0, 1, 8] };

export const groundProps: { posiiton: [x: number, y: number, z: number], rotation: [x: number, y: number, z: number] } = { posiiton: [0, 0, 0], rotation: [-Math.PI / 2, 0, 0] };
