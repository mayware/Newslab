import { NavLink } from "react-router-dom";
import "../styles/navbar.css"

const Navbar = ({ sidenavToggle }) => {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <button className="sidenav-btn" onClick={sidenavToggle}>
                    <span className="material-symbols-outlined btn-icon-close">navigate_before</span>
                    <span className="material-symbols-outlined btn-icon-open">navigate_next</span>
                </button>
                <NavLink to="/" className="navbar-link brand-name-link">Newslab</NavLink>
            </div>
            <div className="navbar-right"></div>
        </nav>
    );
}

export default Navbar;