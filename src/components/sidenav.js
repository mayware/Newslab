import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import '../styles/sidenav.css'
import user from '../assets/user.png'

const Sidenav = ({ linkSelect, activeLink }) => {

    return (
        <aside className='sidenav'>
            <div className="sidenav-top">
                <div className="sidenav-user-profile">
                    <div className="sidenav-user-logo-name">
                        <div className="user-logo">
                            <img src={user} alt="" className="user-logo-img" />
                        </div>
                        <div className="sidenav-user-name">
                            <span className="user-name-text">Username</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sidenav-middle">
                <ul className='sidenav-list'>
                    <li className="list-item">
                        <Link to="/" className={`sidenav-link ${activeLink === '/' ? 'active' : ''}`} onClick={() => linkSelect('/')}>
                            <div className="sidenav-link-text">Home</div>
                            <i className="fa-solid fa-house"></i>
                        </Link>
                    </li>
                    <li className="list-item">
                        <Link to="/explore" className={`sidenav-link ${activeLink === '/explore' ? 'active' : ''}`} onClick={() => linkSelect('/explore')}>
                            <span className="sidenav-link-text">Explore</span>
                            <i className="fa-solid fa-compass"></i>
                        </Link>
                    </li>
                    <li className="list-item">
                        <Link to="/saved" className={`sidenav-link ${activeLink === '/saved' ? 'active' : ''}`} onClick={() => linkSelect('/saved')}>
                            <div className="sidenav-link-text">Watchlist</div>
                            <i className="fa-solid fa-eye"></i>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="sidenav-bottom">
                <ul className="sidenav-list">
                    <li className="list-item">
                        <Link to="/settings" className={`sidenav-link ${activeLink === '/settings' ? 'active' : ''}`} onClick={() => linkSelect('/settings')}>
                            <div className="sidenav-link-text">Settings</div>
                            <i className="fa-solid fa-gear"></i>
                        </Link>
                    </li>
                </ul>
            </div>
        </aside>
    );
}

export default Sidenav;