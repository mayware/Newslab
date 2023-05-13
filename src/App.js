import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from "react"
import Navbar from './components/Navbar';
import Sidenav from './components/sidenav';
import Home from './components/Home';
import Explore from './components/Explore';
import Saved from './components/Saved';
import Settings from './components/Settings';

function App() {

  const [showSidenav, setShowSidenav] = useState(false);
  const [resizeContent, setResizeContent] = useState(false);

  function sidenavToggle() {
    setShowSidenav(!showSidenav);
    setResizeContent(!resizeContent);
  }

  return (
    <Router>
      <div className="App">
        <Navbar sidenavToggle={sidenavToggle} />
        <Sidenav showSidenav={showSidenav} />
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Home resizeContent={resizeContent} />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/saved" element={<Saved />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </Router>

  );
}

export default App;