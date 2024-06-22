// src/components/Nav.js
import React, { useState } from 'react';
import './Nav.css';

const Nav = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleNav = () => {
    setIsActive(!isActive);
  };

  return (
    <nav className={isActive ? 'active' : ''} id="nav">
      <ul>
        <li><button className="link-button">Home</button></li>
        <li><button className="link-button">Works</button></li>
        <li><button className="link-button">About</button></li>
        <li><button className="link-button">Contact</button></li>
      </ul>
      <button className="icon" id="toggle" onClick={toggleNav}>
        <div className="line line1"></div>
        <div className="line line2"></div>
      </button>
    </nav>
  );
};

export default Nav;
