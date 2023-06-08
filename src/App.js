import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from "react"
import Navbar from './components/Navbar';
import Sidenav from './components/Sidenav';
import Home from './components/Home';
import Explore from './components/Explore';
import Saved from './components/Saved';
import Cart from './components/Cart';
import Settings from './components/Settings';
import DarkContext from './context/DarkContect';

function App() {

  const [showSidenav, setShowSidenav] = useState(true);
  const [activeLink, setActiveLink] = useState('');
  const [darkMode, setDarkMode] = useState(true);

  function switchDark() {
    setDarkMode(!darkMode);
  }

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

  function sidenavToggle() {
    setShowSidenav(!showSidenav);
  }

  return (
    <DarkContext.Provider value={{ darkMode, switchDark }}>
      <Router>
        <div className="App">
          <Navbar sidenavToggle={sidenavToggle} linkSelect={linkSelect} activeLink={activeLink} />
          {showSidenav && <Sidenav showSidenav={showSidenav} linkSelect={linkSelect} activeLink={activeLink} />}
          <div className={`container ${darkMode ? '' : 'light'}`}>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/explore" element={<Explore />} />
              <Route path="/saved" element={<Saved />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </div>
        </div>
      </Router>
    </DarkContext.Provider>
  );
}

export default App;