# 3D • Configurator

![Logo of React and three](https://raw.githubusercontent.com/ViktorVojtek/3d-configurator/main/src/assets/img/logo/react%2Bthree.jpg)

## About the project

This is 3D WebGL configurator starter project bootstrapped with [Threejs](https://threejs.org), [React](https://reactjs.org) renderer [react-three-fiber](https://github.com/pmndrs/react-three-fiber).
Project use declarative approach of react components to simply load a 3D model and configure the outside of it (change materials,colors).
_Project is developed and maintained with typescript_.

Project consist from basic scene components like:

- Ground (represent a PlaneBufferGeometry to recieve shadows)
- Model (component fetch and display 3D model in the scene)
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

## License

Distributed under the MIT License.

## Acknowledgements

Project assets should be stored and maintained in `./src/assets` directory. Assets information should be stored in `./src/assets/data.json` file.

### Projects use

- [React](https://reactjs.org)
- [threejs](https://threejs.org)
- [react-three-fiber](https://github.com/pmndrs/react-three-fiber)
- [styled-components](https://styled-components.com)
- [Webpack](https://webpack.js.org)
- Assets used in this project is free [3D model of Chuck Taylor Converse](<(https://sketchfab.com/3d-models/converse-free-bc791439d26f4dd9974819c168e12385)>) shoe and belonging textures. Credit goes to Yaroslav Karas: [https://sketchfab.com/yakaras](https://sketchfab.com/yakaras)
