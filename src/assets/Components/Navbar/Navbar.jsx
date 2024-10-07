import React, { useState } from 'react';
import './Navbar.css';
import { FaWhatsapp } from "react-icons/fa";

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
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Me</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>

      <div>
        <button className="navbar-btn">
          <a href="#" className="navbar-link">
            <FaWhatsapp className="whatsapp-icon" /> Whatsapp
          </a>
        </button>
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
};

export default Navbar;
