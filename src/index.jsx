import { createRoot } from 'react-dom';
import React from 'react';
import App from './App.jsx';
import './index.css';
{
  /* The following line can be included in your src/index.js or App.js file */
}
import 'bootstrap/dist/css/bootstrap.min.css';

const root = document.getElementById('root');

const rootRender = createRoot(root);

rootRender.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
