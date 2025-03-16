import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  
  return (
    <>
      <footer className="footer-container">
        <p>© {new Date().getFullYear()} SGS Gita Mahayagna</p>
      </footer>
      
      {/* Mobile app style tab bar */}
      <nav className="mobile-tab-bar">
        <Link to="/" className={`tab-item ${currentPath === '/' ? 'active' : ''}`}>
          <div className="tab-icon">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z" fill="currentColor" />
            </svg>
          </div>
          <span className="tab-label">Home</span>
        </Link>
        
        <Link to="/students" className={`tab-item ${currentPath.startsWith('/students') ? 'active' : ''}`}>
          <div className="tab-icon">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" fill="currentColor" />
            </svg>
          </div>
          <span className="tab-label">Students</span>
        </Link>
        
        <Link to="/families" className={`tab-item ${currentPath.startsWith('/families') ? 'active' : ''}`}>
          <div className="tab-icon">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M16,4C13.8,4 12,5.8 12,8S13.8,12 16,12 20,10.2 20,8 18.2,4 16,4M16,6A2,2 0 0,1 18,8A2,2 0 0,1 16,10A2,2 0 0,1 14,8A2,2 0 0,1 16,6M16,13C13.3,13 8,14.3 8,17V20H24V17C24,14.3 18.7,13 16,13M8,5.5C6.1,5.5 4.5,7.1 4.5,9S6.1,12.5 8,12.5 11.5,10.9 11.5,9 9.9,5.5 8,5.5M8,7.5A1.5,1.5 0 0,1 9.5,9A1.5,1.5 0 0,1 8,10.5A1.5,1.5 0 0,1 6.5,9A1.5,1.5 0 0,1 8,7.5M4,13.5C1.5,13.5 0,14.7 0,16.5V19H8V16.5C8,14.7 6.5,13.5 4,13.5Z" fill="currentColor" />
            </svg>
          </div>
          <span className="tab-label">Families</span>
        </Link>
        
        <Link to="/settings" className={`tab-item ${currentPath.startsWith('/settings') ? 'active' : ''}`}>
          <div className="tab-icon">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.67 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z" fill="currentColor" />
            </svg>
          </div>
          <span className="tab-label">Settings</span>
        </Link>
      </nav>
      
      {/* Safe area padding for iOS devices */}
      <div className="safe-area-bottom"></div>
    </>
  );
};

export default Footer;
