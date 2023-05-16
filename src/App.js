import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from "react"
import Navbar from './components/Navbar';
import Sidenav from './components/sidenav';
import Home from './components/Home';
import Explore from './components/Explore';
import Saved from './components/Saved';
import Cart from './components/Cart';
import Settings from './components/Settings';
// e8b5910d0c7b4295a518c1d72fc16dfd

function App() {

  const [showSidenav, setShowSidenav] = useState(false);
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
        <Sidenav showSidenav={showSidenav} linkSelect={linkSelect} activeLink={activeLink} />
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