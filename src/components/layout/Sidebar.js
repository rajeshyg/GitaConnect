import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css';
// Import icons (assuming you have web-compatible versions)
import { 
  FaHome as HomeIcon,
  FaUserGraduate as StudentsIcon, 
  FaUsers as FamiliesIcon,
  FaChartBar as StatsIcon,
  FaUserCircle as ProfileIcon
} from 'react-icons/fa';

const Sidebar = () => {
  const location = useLocation();
  
  // Check if the path is active
  const isActive = (path) => {
    return location.pathname === path;
  };

  // Add inline SVG styling to ensure visibility
  const iconStyle = { 
    display: 'block', 
    fontSize: '20px',
    opacity: 1
  };
  
  return (
    <aside className="sidebar">
      <div className="ios-tab-bar">
        <Link to="/home" className={`tab-item ${isActive('/home') ? 'active' : ''}`}>
          <div className="tab-icon">
            <HomeIcon style={iconStyle} />
          </div>
          <div className="tab-label">Home</div>
        </Link>
        <Link to="/students" className={`tab-item ${isActive('/students') ? 'active' : ''}`}>
          <div className="tab-icon">
            <StudentsIcon style={iconStyle} />
          </div>
          <div className="tab-label">Students</div>
        </Link>
        <Link to="/families" className={`tab-item ${isActive('/families') ? 'active' : ''}`}>
          <div className="tab-icon">
            <FamiliesIcon style={iconStyle} />
          </div>
          <div className="tab-label">Gita Families</div>
        </Link>
        <Link to="/statistics" className={`tab-item ${isActive('/statistics') ? 'active' : ''}`}>
          <div className="tab-icon">
            <StatsIcon style={iconStyle} />
          </div>
          <div className="tab-label">Statistics</div>
        </Link>
        <Link to="/profile" className={`tab-item ${isActive('/profile') ? 'active' : ''}`}>
          <div className="tab-icon">
            <ProfileIcon style={iconStyle} />
          </div>
          <div className="tab-label">Profile</div>
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
