# 3D • Configurator

![Logo of React and three](https://raw.githubusercontent.com/ViktorVojtek/3d-configurator/main/src/assets/img/logo/react%2Bthree.jpg)

## About the project

This is 3D WebGL configurator starter project bootstrapped with [Threejs](https://threejs.org), [React](https://reactjs.org) renderer [react-three-fiber](https://github.com/pmndrs/react-three-fiber).
Project use declarative approach of react components to simply load a 3D model and configure the outside of it (change materials,colors).

Project consist from basic scene components like:

- Ground (represent a PlaneBufferGeometry to recieve shadows)
- Model (component fetch and display 3D model in the secene)
- Controls (represent an OrbitControls controller to control the view of the target in the scene)

The rest of the scene are made up by simple react-fiber primitives that are easy to use and adjust for specific scene needs. Project also consist from a simple UI components like:

- Loader (spinner component displayed during the process of loading model and its textures managed by react Suspense component)
- Menu (a simple component to manage change of model materials)

> Global state management is handled by react context api hooks.

### Getting started

1. Copy, download or clone this repository `https://github.com/ViktorVojtek/3d-configurator.git` to your local working directory
2. Use `yarn` or `npm install` to install dependencies
3. To kick of the development server use `yarn dev` or `npm run dev` command in the terminal
4. For production build use `yarn build` or `npm run build` command to create the `./dist` directory with html template and final js bundles
