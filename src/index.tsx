import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { StateProvider } from './App/utils/store';

render(
  <React.StrictMode>
    <StateProvider>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
