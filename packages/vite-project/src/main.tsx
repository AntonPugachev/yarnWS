import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import '@monorepo/shared-components/src/styles/index.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
