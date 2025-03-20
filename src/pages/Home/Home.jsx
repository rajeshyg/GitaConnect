import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import opportunities from '../../data/opportunities.json';
import announcements from '../../data/announcements.json';

const Home = () => {
  const [filterCategory, setFilterCategory] = useState('all');
  const handleFilter = (category) => setFilterCategory(category);

  const filteredOpportunities = opportunities.filter(opp => {
    if (filterCategory === 'all') return true;
    if (filterCategory === 'scholarship') return opp.type === 'scholarship';
    if (filterCategory === 'internship') return opp.type === 'internship';
    if (filterCategory === 'admissions') return opp.type === 'college';
    return true;
  });
  const displayedOpportunities = filteredOpportunities.slice(0, 3);
  const recentAnnouncements = announcements.slice(0, 2);

  return (
    <div className="ios-home">
      <div className="ios-welcome-card">
        <h1 className="ios-greeting">Welcome to SGS Gita Connect</h1>
        <p className="ios-subheading">Connecting alumni for opportunities and growth</p>
      </div>

      <div className="ios-section">
        <div className="ios-section-header">
          <h2>Featured Opportunities</h2>
          <Link to="/opportunities" className="ios-section-link">See All</Link>
        </div>
        
        <div className="ios-filter-tags">
          <button onClick={() => handleFilter('all')} className={filterCategory==='all' ? 'active' : ''}>All</button>
          <button onClick={() => handleFilter('scholarship')} className={filterCategory==='scholarship' ? 'active' : ''}>Scholarships</button>
          <button onClick={() => handleFilter('internship')} className={filterCategory==='internship' ? 'active' : ''}>Internships</button>
          <button onClick={() => handleFilter('admissions')} className={filterCategory==='admissions' ? 'active' : ''}>Admissions</button>
        </div>
        
        <div className="ios-scrollable-cards">
          {displayedOpportunities.map(opportunity => (
            <div className="ios-card" key={opportunity.id}>
              <div className="ios-card-badge">{opportunity.type}</div>
              <h3 className="ios-card-title">{opportunity.title}</h3>
              <p className="ios-card-subtitle">
                {opportunity.company || opportunity.organization || opportunity.institution}
              </p>
              <Link to={`/opportunities/${opportunity.id}`} className="ios-button">View Details</Link>
            </div>
          ))}
        </div>
      </div>

      <div className="ios-list-section">
        <div className="ios-section-header">
          <h2>Recent Announcements</h2>
          <Link to="/announcements" className="ios-section-link">See All</Link>
        </div>
        
        <div className="ios-list">
          {recentAnnouncements.map(announcement => (
            <Link to={`/announcements/${announcement.id}`} className="ios-list-item" key={announcement.id}>
              <div className="ios-list-item-content">
                <div className="ios-list-item-title">{announcement.title}</div>
                <div className="ios-list-item-date">{new Date(announcement.date).toLocaleDateString()}</div>
              </div>
              <div className="ios-chevron"></div>
            </Link>
          ))}
        </div>
      </div>

      <div className="ios-section">
        <h2>Quick Actions</h2>
        <div className="ios-action-grid">
          <Link to="/profile" className="ios-action-item">
            <div className="ios-action-icon profile-icon"></div>
            <span>My Profile</span>
          </Link>
          <Link to="/opportunities" className="ios-action-item">
            <div className="ios-action-icon opportunities-icon"></div>
            <span>Opportunities</span>
          </Link>
          <Link to="/find-alumni" className="ios-action-item">
            <div className="ios-action-icon search-icon"></div>
            <span>Find Alumni</span>
          </Link>
          <Link to="/messages" className="ios-action-item">
            <div className="ios-action-icon message-icon"></div>
            <span>Messages</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;