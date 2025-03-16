import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  
  // Determine if we need to show back button
  const canGoBack = location.pathname !== '/';
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const goBack = () => {
    navigate(-1);
  };
  
  return (
    <header className="ios-header">
      <div className="ios-status-bar"></div>
      <div className="ios-nav-bar">
        {canGoBack && (
          <button className="ios-back-button" onClick={goBack}>
            <div className="ios-back-icon"></div>
            <span>Back</span>
          </button>
        )}
        
        <h1 className="ios-nav-title">SGS Gita Mahayagna</h1>
        
        {/* Nav links for tablets/desktop */}
        <div className="header-nav">
          <Link to="/">Home</Link>
          <Link to="/students">Students</Link>
          <Link to="/families">Families</Link>
          <Link to="/profile">Profile</Link>
        </div>
        
        {/* Mobile menu button */}
        <button className="ios-menu-button" onClick={toggleMenu} aria-label="Menu">
          <div className="menu-icon"></div>
        </button>
        
        {/* Mobile dropdown menu */}
        {menuOpen && (
          <>
            <div className="backdrop" onClick={toggleMenu}></div>
            <div className="ios-menu">
              <Link to="/" className="ios-menu-item" onClick={toggleMenu}>Home</Link>
              <Link to="/students" className="ios-menu-item" onClick={toggleMenu}>Students</Link>
              <Link to="/families" className="ios-menu-item" onClick={toggleMenu}>Families</Link>
              <Link to="/profile" className="ios-menu-item" onClick={toggleMenu}>Profile</Link>
              <Link to="/settings" className="ios-menu-item" onClick={toggleMenu}>Settings</Link>
              <Link to="/help" className="ios-menu-item" onClick={toggleMenu}>Help</Link>
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
