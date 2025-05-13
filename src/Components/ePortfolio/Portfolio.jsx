import './Portfolio.css'; 
import Profileimg from '/src/assets/Profile.jpg';
import Cheminement from './Cheminement';

export default function Portfolio({ projects }) {
  return (
    <div className="portfolio">
      <div className="profile-section">
        <img className="profile-img" src={Profileimg} alt="Profile" />
        <div className="profile-info">
          <h1>Benakki Youcef</h1>
          <pre>Curieux   Autonome   Dynamique</pre>
          <h4>Passionné par la programmation informatique, les jeux vidéos et la musique</h4>
        </div>
      </div>

      <Cheminement />
      
      <div className="project-list">
        <h1>Projects</h1>
        <div className="project-list">
          {projects.map((project) => (
            <div className="project" key={project.id}>
              <h2>{project.Title}</h2>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}