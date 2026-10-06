import { NavLink } from 'react-router-dom';
import logo from '../assets/A.png';
import './Navbar.css';

function Navbar() {
    return (
        <nav className="main-navbar">
            <div className="nav-container">
                {/* Logo */}
                <NavLink to="/" className="brand">
                    <img src={logo} alt="React App Logo" />
                    <span>React Multi-Page App</span>
                </NavLink>
                {/* Navigation Links */}
                <div className="nav-links">
                    <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}> Home </NavLink>
                    <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}> About</NavLink>
                    <NavLink to="/users" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}> Users</NavLink>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;