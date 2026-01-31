import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const closeMenu = () => {
    setMenuActive(false);
  };

  // Check if a path is active
  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <header className={scrolled ? 'scrolled' : ''}>
      <div className="topbar">
        <div className="container">
          <div className="topbar-info">
            <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-map-marker-alt"></i>
              Hiranandani Business Park, Powai, Mumbai - 400071
            </a>
            <a href="tel:+918828495202">
              <i className="fas fa-phone"></i>
              +91 8828495202
            </a>
            <a href="mailto:info@cyberaries.com">
              <i className="fas fa-envelope"></i>
              info@cyberaries.com
            </a>
          </div>
          <div className="topbar-social">
            <a href="https://www.linkedin.com/company/cyberariespvtltd/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
            <a href="https://www.linkedin.com/company/cyberariespvtltd/" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
            <a href="https://www.linkedin.com/company/cyberariespvtltd/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
            <a href="https://www.linkedin.com/company/cyberariespvtltd/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
      <nav className="navbar">
        <div className="logo-container">
          <Link to="/" onClick={closeMenu}>
            <img src="/cyberaries-logo.png" alt="Cyber Aries Logo" />
          </Link>
        </div>
        <ul className={`nav-menu ${menuActive ? 'active' : ''}`}>
          <li>
            <Link to="/" onClick={closeMenu} className={isActive('/')}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={closeMenu} className={isActive('/about')}>
              About
            </Link>
          </li>
          <li>
            <Link to="/services" onClick={closeMenu} className={isActive('/services')}>
              Services
            </Link>
          </li>
          <li>
            <Link to="/careers" onClick={closeMenu} className={isActive('/careers')}>
              Career
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={closeMenu} className={isActive('/contact')}>
              Contact
            </Link>
          </li>
        </ul>
        <Link to="/appointment" className="cta-button" onClick={closeMenu}>
          Book Free Consultation
        </Link>
        <div className="menu-toggle" onClick={toggleMenu}>
          <i className="fas fa-bars"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;