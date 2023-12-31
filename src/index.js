import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode basename="/goit-react-hw-04-feedback">
    <App />
  </React.StrictMode>
);
