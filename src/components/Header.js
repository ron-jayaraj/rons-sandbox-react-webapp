// Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import './Rons.css';

const Header = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <nav>
      <div className="logo">
       <Link className="rons-sandbox" to ="/home">Rons Sandbox</Link>  
      </div>
      <div className={`menu ${menuVisible ? 'show' : ''}`}>
        <Link to="/home" onClick={() => setMenuVisible(false)}>Home</Link>
        <Link to="/about" onClick={() => setMenuVisible(false)}>About</Link>
        <Link to="/contact" onClick={() => setMenuVisible(false)}>Contact</Link>
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Header;
