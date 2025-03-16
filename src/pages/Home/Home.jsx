import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

const Home = () => {
  // Mock data for featured opportunities
  const featuredOpportunities = [
    {
      id: 1,
      title: 'Software Engineering Internship',
      company: 'Tech Innovations Inc.',
      type: 'internship',
    },
    {
      id: 2,
      title: 'Full Scholarship for Computer Science',
      organization: 'National Science Foundation',
      type: 'scholarship',
    },
    {
      id: 3,
      title: 'MBA Program Applications Open',
      institution: 'Business Leadership University',
      type: 'college',
    },
  ];

  // Mock data for recent announcements
  const recentAnnouncements = [
    {
      id: 1,
      title: 'Annual Alumni Meet 2023',
      date: '2023-12-15',
      excerpt: 'Join us for the annual alumni gathering happening next month...',
    },
    {
      id: 2,
      title: 'New Mentorship Program',
      date: '2023-11-20',
      excerpt: 'We are excited to announce our new mentorship initiative...',
    },
  ];

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
        
        <div className="ios-scrollable-cards">
          {featuredOpportunities.map(opportunity => (
            <div className="ios-card" key={opportunity.id}>
              <div className="ios-card-badge">{opportunity.type}</div>
              <h3 className="ios-card-title">{opportunity.title}</h3>
              <p className="ios-card-subtitle">{opportunity.company || opportunity.organization || opportunity.institution}</p>
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
