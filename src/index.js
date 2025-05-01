import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
const addLink = (href) => {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = href;
  document.head.appendChild(link);
};
addLink('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
addLink('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css');
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
