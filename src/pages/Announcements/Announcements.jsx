import React from 'react';
import { Link } from 'react-router-dom';
import announcements from '../../data/announcements.json';

const Announcements = () => (
  <div>
    <h1>Announcements</h1>
    {announcements.map(announcement => (
      <Link key={announcement.id} to={`/announcements/${announcement.id}`} className="ios-list-item">
        <div className="ios-list-item-content">
          <div className="ios-list-item-title">{announcement.title}</div>
          <div className="ios-list-item-date">{new Date(announcement.date).toLocaleDateString()}</div>
        </div>
      </Link>
    ))}
  </div>
);

export default Announcements;
