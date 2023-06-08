import { NavLink } from "react-router-dom";
import "../styles/navbar.css"
import { useState, useEffect } from "react";

const Navbar = ({ sidenavToggle, linkSelect, activeLink }) => {

    const [darkMode, setDarkMode] = useState(true);

    function switchDark() {
        setDarkMode(!darkMode);
    }

    return (
        <nav className="navbar">
            <div className="navbar-left">
                <button className="sidenav-btn" onClick={sidenavToggle}>
                    <span className="material-symbols-outlined btn-icon">menu</span>
                </button>
                <NavLink to="/" className={`navbar-link brand-name-link ${activeLink == '/' ? 'active' : ''}`} onClick={() => linkSelect('/')}>Recaller</NavLink>
            </div>
            <div className="navbar-right">
                <NavLink to="/cart" className={`navbar-link ${activeLink == '/cart' ? 'active' : ''}`} onClick={() => linkSelect('/cart')}>
                    <span className="material-symbols-outlined">shopping_cart</span>
                </NavLink>
                <button className="theme-switch-btn" onClick={switchDark}>
                    {darkMode && <span className="material-symbols-outlined">light_mode</span>}
                    {!darkMode && <span className="material-symbols-outlined">dark_mode</span>}
                </button>
                <button className="use-account-btn">
                    <span className="material-symbols-outlined">person</span>
                </button>
            </div>
        </nav>
    );
}

export default Navbar;