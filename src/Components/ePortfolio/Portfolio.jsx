import './Portfolio.css';
import Profileimg from '/src/assets/Profile.jpg';
import Cheminement from './Cheminement';

export default function Portfolio({ projects, darkMode, toggleDarkMode }) {
    return (
        <>
     <div className={`portfolio ${darkMode ? 'dark-mode' : ''}`}>
              
             <button onClick={toggleDarkMode} className="toggle-dark-mode">
                    {darkMode ? 'Light Mode' : 'Dark Mode'}
             </button>

    <div className={`profile-section ${darkMode ? 'dark-mode' : ''}`}>
       <img className="profile-img" src={Profileimg} alt="Profile" />
                  <div className="profile-info">
           <h1 className={darkMode ? 'dark-mode' : ''}>Benakki Youcef</h1>
            <pre className={darkMode ? 'dark-mode' : ''}>Curieux   Autonome   Dynamique</pre>
               <h4 className={darkMode ? 'dark-mode' : ''}>
                            Passionné par la programmation informatique, les jeux vidéos et la musique
                        </h4>
            </div>
                </div>
            </div>

            <Cheminement />

    <div className="project-list">
        <h1>Projects</h1>
              <div className="project-list">
        {projects.map((project) => (
            <div className={`project ${darkMode ? 'dark-mode' : ''}`} key={project.id}>
                <h2>{project.Title}</h2>
                <p>{project.description}</p>
        </div>
        ))}
              </div>
          </div>
        </>
    );
}