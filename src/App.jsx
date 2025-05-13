import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header.jsx';
import Navbar from './Components/Navbar.jsx';
import Footer from './Components/Footer.jsx';
import Portfolio from './Components/ePortfolio/Portfolio.jsx';
import AddPortfolio from './Components/AddProject/AddProject.jsx';
import APIPage from './Components/API/API.jsx';

function App() {
  const [projects, setProjects] = useState([
    { id: Date.now(), Title: "Maitrise de Front-End / Back-End", description: "Maitrise du Developpement Web (Back-end et Front-end) " },
    { id: Date.now() + 1, Title: "Jeux de simulation (En Cours...)", description: "Un jeu de simulation (Fisherman simulator) en développement..." },
  ]);

  const handleAddProject = (newProject) => {
    setProjects((prevProjects) => [...prevProjects, newProject]);
  };

  return (
    <Router>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Portfolio projects={projects} />} />
        <Route path="/add" element={<AddPortfolio onAddProject={handleAddProject} />} />
        <Route path="/api" element={<APIPage />} />
      </Routes>
      <Footer/>
    </Router>
    

  );
}

export default App;