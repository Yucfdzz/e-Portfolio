import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header.jsx';
import Navbar from './Components/Navbar.jsx';
import Portfolio from './Components/ePortfolio/Portfolio.jsx';
import AddPortfolio from './Components/AddProject/AddProject.jsx';
import APIPage from './Components/API/API.jsx';

function App() {
  return (
    <Router>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Portfolio />} /> 
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/add" element={<AddPortfolio />} />
        <Route path="/api" element={<APIPage />} />
      </Routes>
    </Router>
  );
}

export default App;