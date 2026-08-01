// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import WasteType from './components/WasteType';
import SpecificWaste from './components/SpecificWaste';
import ActionDetails from './components/ActionDetails';
import Breadcrumb from './components/Breadcrumb';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Global Header visible across all processes */}
        <header className="global-header">
          <h1>EcoGuide</h1>
          <p>Your guide to proper disposal, recycling, and sustainable pathways.</p>
        </header>

        {/* Persistent Breadcrumb Navigation */}
        <Breadcrumb />

        {/* Dynamic Route Content */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/waste-type/:wasteType" element={<WasteType />} />
            <Route path="/specific-waste/:subtype" element={<SpecificWaste />} />
            <Route path="/action-details/:subtype/:action" element={<ActionDetails />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;