import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './TabBar.css';

const TabBar = () => {
  const location = useLocation();
  
  // Function to check if a route is active
  const isActive = (path) => location.pathname === path;
  
  return (
    <div className="ios-tab-bar">
      <Link to="/" className={`tab-item ${isActive('/') ? 'active' : ''}`}> {/* Home Tab */}
        <div className="tab-icon home-icon"></div>
        <div className="tab-label">Home</div>
      </Link>
      <Link to="/opportunities" className={`tab-item ${isActive('/opportunities') ? 'active' : ''}`}> {/* Opportunities Tab */}
        <div className="tab-icon opportunities-icon"></div>
        <div className="tab-label">Opportunities</div>
      </Link>
      <Link to="/community" className={`tab-item ${isActive('/community') ? 'active' : ''}`}> {/* Community Tab */}
        <div className="tab-icon community-icon"></div>
        <div className="tab-label">Community</div>
      </Link>
      <Link to="/profile" className={`tab-item ${isActive('/profile') ? 'active' : ''}`}> {/* Profile Tab */}
        <div className="tab-icon profile-icon"></div>
        <div className="tab-label">Profile</div>
      </Link>
    </div>
  );
};

export default TabBar;
