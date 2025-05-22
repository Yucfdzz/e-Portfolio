import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header.jsx';
import Navbar from './Components/Navbar.jsx';
import Footer from './Components/Footer.jsx';
import Projects from './Components/ePortfolio/Projects.jsx';
import Portfolio from './Components/ePortfolio/Portfolio.jsx';
import AddPortfolio from './Components/AddProject/AddProject.jsx';
import APIPage from './Components/API/API.jsx';

function App() {
  const [projects, setProjects] = useState([
    { id: 1, Title: "Maitrise de Front-End / Back-End", description: "Maitrise du Developpement Web (Back-end et Front-end)" },
    { id: 2, Title: "Jeux de simulation (En Cours...)", description: "Un jeu de simulation (Fisherman simulator) en développement..." },
]);
const [darkMode, setDarkMode] = useState(false);

const handleAddProject = (newProject) => {
  setProjects([...projects, newProject]);
};

const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode');  // vu sur internet
};

return (
    <Router>
      <Header/>
      <Navbar/>
        <Routes>
          
            <Route path="/" element={<Portfolio projects={projects} darkMode={darkMode} toggleDarkMode={toggleDarkMode} />} />
            <Route path="/projects" element={<Projects projects={projects} darkMode={darkMode} toggleDarkMode={toggleDarkMode} />} />
            <Route path="/add" element={<AddPortfolio  onAddProject={handleAddProject}/>} />
            <Route path="/api" element={<APIPage darkMode={darkMode} />} />
        </Routes>
        <Footer/>
    </Router>
);
}

export default App;