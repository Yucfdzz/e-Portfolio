import { Link } from 'react-router-dom';
import '/src/App.css';

export default function Navbar() {
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li className="navbar-item">
                    <Link to="/">My e-Portfolio</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/add">Add a project</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/api">API</Link>
                </li>
            </ul>
        </nav>
    );
}