import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from "react"
import Navbar from './components/Navbar';
import Sidenav from './components/Sidenav';
import Home from './components/Home';
import Explore from './components/Explore';
import Saved from './components/Saved';
import Cart from './components/Cart';
import Settings from './components/Settings';

function App() {

  const [showSidenav, setShowSidenav] = useState(true);
  const [resizeContent, setResizeContent] = useState(false);
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

  function sidenavToggle() {
    setShowSidenav(!showSidenav);
    setResizeContent(!resizeContent);
  }

  return (
    <Router>
      <div className="App">
        <Navbar sidenavToggle={sidenavToggle} linkSelect={linkSelect} activeLink={activeLink} />
        {showSidenav && <Sidenav showSidenav={showSidenav} linkSelect={linkSelect} activeLink={activeLink} />}
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Home resizeContent={resizeContent} />} />
            <Route path="/explore" element={<Explore resizeContent={resizeContent} />} />
            <Route path="/saved" element={<Saved resizeContent={resizeContent} />} />
            <Route path="/cart" element={<Cart resizeContent={resizeContent} />} />
            <Route path="/settings" element={<Settings resizeContent={resizeContent} />} />
          </Routes>
        </div>
      </div>
    </Router>

  );
}

export default App;