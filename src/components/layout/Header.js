import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const goBack = () => {
    navigate(-1);
  };

  // Check if we're on the home page
  const isHomePage = location.pathname === '/';

  return (
    <header className="ios-header">
      <div className="ios-status-bar"></div>
      <div className="ios-nav-bar">
        {!isHomePage && (
          <button className="ios-back-button" onClick={goBack}>
            <div className="ios-back-icon"></div>
            <span>Back</span>
          </button>
        )}
        <div className="ios-nav-title">SGS Gita Connect</div>
        <button className="ios-menu-button" onClick={toggleMenu}>
          <div className="menu-icon"></div>
        </button>
      </div>
      
      {menuOpen && (
        <div className="ios-menu ios-slide-up">
          <Link to="/" className="ios-menu-item" onClick={toggleMenu}>Home</Link>
          <Link to="/profile" className="ios-menu-item" onClick={toggleMenu}>My Profile</Link>
          <Link to="/opportunities" className="ios-menu-item" onClick={toggleMenu}>Opportunities</Link>
          <Link to="/community" className="ios-menu-item" onClick={toggleMenu}>Community</Link>
          <Link to="/login" className="ios-menu-item" onClick={toggleMenu}>Login</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
