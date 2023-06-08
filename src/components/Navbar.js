import { NavLink } from "react-router-dom";
import "../styles/navbar.css"
import { useContext, useState } from "react";
import DarkContext from "../context/DarkContect";


const Navbar = ({ sidenavToggle, linkSelect, activeLink }) => {

    const { darkMode } = useContext(DarkContext);
    const { switchDark } = useContext(DarkContext);

    return (
        <nav className="navbar">
            <div className="navbar-left">
                <button className="sidenav-btn" onClick={sidenavToggle}>
                    <i className="fa-solid fa-bars"></i>
                </button>
                <NavLink to="/" className={`brand-name-link ${activeLink == '/' ? 'active' : ''}`} onClick={() => linkSelect('/')}>Recaller</NavLink>
            </div>
            <div className="navbar-right">
                <NavLink to="/cart" className={`navbar-link ${activeLink == '/cart' ? 'active' : ''}`} onClick={() => linkSelect('/cart')}>
                    <i className="fa-solid fa-cart-shopping"></i>
                </NavLink>
                <button className="navbar-item theme-switch-btn" onClick={switchDark}>
                    {darkMode && <i className="fa-solid fa-sun lightModeIcon"></i>}
                    {!darkMode && <i className="fa-solid fa-moon darkModeIcon"></i>}
                </button>
                <button className="navbar-item user-account-btn">
                    <i className="fa-solid fa-user"></i>
                </button>
            </div>
        </nav>
    );
}

export default Navbar;