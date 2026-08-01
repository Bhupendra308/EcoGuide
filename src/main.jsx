// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Optional: If you have global styles
import App from './App'; // Import the main App component

// Render the app into the root div
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />  {/* Main application component */}
  </React.StrictMode>
);
