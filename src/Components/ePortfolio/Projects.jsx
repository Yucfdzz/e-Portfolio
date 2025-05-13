import './Portfolio.css'; 



export default function Projects(props) {
    return (
    <>
        
        <div className="project">
            
            <h2>{props.Title}</h2>
            <p>{props.description}</p>
        </div>
        </> 
    );
}
