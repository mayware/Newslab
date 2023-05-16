import { NavLink } from "react-router-dom";
import "../styles/navbar.css"
import { useState, useEffect } from "react";

const Navbar = ({ sidenavToggle, linkSelect, activeLink }) => {

    return (
        <nav className="navbar">
            <div className="navbar-left">
                <button className="sidenav-btn" onClick={sidenavToggle}>
                    <span className="material-symbols-outlined btn-icon">menu</span>
                </button>
                <NavLink to="/" className={`navbar-link brand-name-link ${activeLink == '/' ? 'active' : ''}`} onClick={() => linkSelect('/')}>Recaller</NavLink>
            </div>
            <div className="navbar-right">
                <button className="create-post-btn">
                    <span className="create-btn-text">Create</span>
                    <span className="material-symbols-outlined">add</span>
                </button>
                {/* <NavLink to="/login" className="navbar-link" id="loginLink">
                    <span className="material-symbols-outlined">account_circle</span>
                </NavLink> */}
                <NavLink to="/cart" className={`navbar-link ${activeLink == '/cart' ? 'active' : ''}`} onClick={() => linkSelect('/cart')}>
                    <span className="material-symbols-outlined">shopping_cart</span>
                </NavLink>
            </div>
        </nav>
    );
}

export default Navbar;