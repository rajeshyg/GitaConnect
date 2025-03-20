import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = ({
  logo,
  navItems = [],
  fixed = false,
  transparent = false,
  user = null,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navbarClass = `navbar ${fixed ? 'navbar-fixed' : ''} ${transparent ? 'navbar-transparent' : ''}`;
  const menuClass = `navbar-menu ${isMenuOpen ? 'navbar-menu-open' : 'navbar-menu-closed'}`;

  return (
    <nav className={navbarClass} role="navigation">
      <div className="navbar-container">
        <div className="navbar-brand">
          {logo && <div className="navbar-logo">{logo}</div>}
          
          <button 
            className="navbar-toggle" 
            onClick={toggleMenu} 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggle-icon"></span>
          </button>
        </div>
        
        <div className={menuClass} data-testid="mobile-menu">
          <div className="navbar-nav">
            {navItems.map((item, index) => (
              <Link key={index} to={item.to} className="navbar-item">
                {item.label}
              </Link>
            ))}
          </div>
          
          {user && (
            <div className="navbar-user">
              <img 
                src={user.avatar} 
                alt={user.name} 
                className="navbar-avatar" 
              />
              <span className="navbar-username">{user.name}</span>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
