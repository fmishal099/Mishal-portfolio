import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='navbar'>
      <div className="navbar-logo">
        <h2>Portfolio</h2>
      </div>
      <div className={`navbar-items ${isOpen ? 'navbar-open' : ''}`}>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About Me</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
      <div>
        <button className='navbar-btn'><a href="#">Connect With Me</a></button>
      </div>
      <div className="navbar-hamburger" onClick={toggleMenu}>
        {isOpen ? (
          <span className="navbar-close-icon">&times;</span>
        ) : (
          <>
            <span className="navbar-bar"></span>
            <span className="navbar-bar"></span>
            <span className="navbar-bar"></span>
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;
