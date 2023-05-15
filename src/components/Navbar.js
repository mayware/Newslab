import { NavLink } from "react-router-dom";
import "../styles/navbar.css"

const Navbar = ({ sidenavToggle }) => {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <button className="sidenav-btn" onClick={sidenavToggle}>
                    <span className="material-symbols-outlined btn-icon">menu</span>
                </button>
                <NavLink to="/" className="navbar-link brand-name-link">Newslab</NavLink>
            </div>
            <div className="navbar-right">
                <NavLink to="/cart" className="navbar-link">
                    <span class="material-symbols-outlined">shopping_cart</span>
                </NavLink>
            </div>
        </nav>
    );
}

export default Navbar;