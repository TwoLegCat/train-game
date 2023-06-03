import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MapVisuals from './components/MapVisuals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <MapVisuals />
  </React.StrictMode>
);
