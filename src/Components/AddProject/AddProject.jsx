import React from 'react';
import './AddProject.css'; 
import '/src/App.css';

export default function AddPortfolio({ onAddProject }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newProject = {
      id: Date.now(),
      Title: formData.get("title"),
      description: formData.get("description"),
    };
    onAddProject(newProject);
    e.target.reset();
  };

  return (
    <div className="add-portfolio">
      <h1>Add a New Project</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Project Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Enter project title"
            required
          />
        </div>
        <div>
          <label htmlFor="description">Project Description:</label>
          <textarea
            id="description"
            name="description"
            placeholder="Enter project description"
            required
          />
        </div>
        <button type="submit">Add Project</button>
      </form>
    </div>
  );
}