import React from 'react';
import { NavLink } from 'react-router-dom';
import './TabBar.css';

const TabBar = () => {
  return (
    <div className="ios-tab-bar">
      <NavLink to="/" className={({ isActive }) => `tab-item ${isActive ? 'active' : ''}`} end>
        <div className="tab-icon home-icon"></div>
        <span className="tab-label">Home</span>
      </NavLink>
      
      <NavLink to="/opportunities" className={({ isActive }) => `tab-item ${isActive ? 'active' : ''}`}>
        <div className="tab-icon opportunities-icon"></div>
        <span className="tab-label">Opportunities</span>
      </NavLink>
      
      <NavLink to="/community" className={({ isActive }) => `tab-item ${isActive ? 'active' : ''}`}>
        <div className="tab-icon community-icon"></div>
        <span className="tab-label">Community</span>
      </NavLink>
      
      <NavLink to="/profile" className={({ isActive }) => `tab-item ${isActive ? 'active' : ''}`}>
        <div className="tab-icon profile-icon"></div>
        <span className="tab-label">Profile</span>
      </NavLink>
    </div>
  );
};

export default TabBar;
