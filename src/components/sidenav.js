import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import '../styles/sidenav.css'
import user from '../assets/user.png'

const Sidenav = ({ showSidenav }) => {

    const [activeLink, setActiveLink] = useState('');

    useEffect(() => {
        const linkStored = localStorage.getItem("activeLink");
        if (linkStored) {
            setActiveLink(linkStored);
        }
    }, []);
    function linkSelect(link) {
        setActiveLink(link);
        localStorage.setItem("activeLink", link);
    }

    return (
        <aside className={`sidenav ${showSidenav ? 'show' : ''}`}>
            <div className="sidenav-top">
                <div className="sidenav-user-profile">
                    <Link to="/settings" className={`sidenav-link ${activeLink === '/settings' ? 'active' : ''}`} onClick={() => linkSelect('/settings')}>
                        <div className="sidenav-user-logo-name">
                            <div className="user-logo">
                                <img src={user} alt="" className="user-logo-img" />
                            </div>
                            <div className="sidenav-user-name">
                                <span className="user-name-text">Username</span>
                            </div>
                        </div>
                        <div className="sidenav-user-edit">
                            <span className="material-symbols-outlined">edit_square</span>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="sidenav-middle">
                <ul className='sidenav-list'>
                    <li className="list-item">
                        <Link to="/" className={`sidenav-link ${activeLink === '/' ? 'active' : ''}`} onClick={() => linkSelect('/')}>
                            <div className="sidenav-link-text">Home</div>
                            <span className="material-symbols-outlined">home</span>
                        </Link>
                    </li>
                    <li className="list-item">
                        <Link to="/explore" className={`sidenav-link ${activeLink === '/explore' ? 'active' : ''}`} onClick={() => linkSelect('/explore')}>
                            <span className="sidenav-link-text">Explore</span>
                            <span className="material-symbols-outlined">explore</span>
                        </Link>
                    </li>
                    <li className="list-item">
                        <Link to="/saved" className={`sidenav-link ${activeLink === '/saved' ? 'active' : ''}`} onClick={() => linkSelect('/saved')}>
                            <div className="sidenav-link-text">Saved</div>
                            <span className="material-symbols-outlined">star</span>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="sidenav-bottom">
                <ul className="sidenav-list">
                    <li className="list-item">
                        <Link to="/settings" className={`sidenav-link ${activeLink === '/settings' ? 'active' : ''}`} onClick={() => linkSelect('/settings')}>
                            <div className="sidenav-link-text">Settings</div>
                            <span className="material-symbols-outlined">settings</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </aside>
    );
}

export default Sidenav;