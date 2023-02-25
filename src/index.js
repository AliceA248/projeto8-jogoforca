import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./components/reset.css";
import "./components/styles.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);