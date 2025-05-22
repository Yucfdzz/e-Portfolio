import './Portfolio.css';

export default function Projects({ projects, darkMode}) {
    return (
        <div className={`projects-container ${darkMode ? 'dark-mode' : ''}`}>


            <h1>My Projects</h1>
            <div className="projects-list">
                {projects.map((project) => (
                    <div className={`project-card ${darkMode ? 'dark-mode' : ''}`} key={project.id}>
                        <h2>{project.Title}</h2>
                        <p>{project.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}