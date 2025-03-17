import React from 'react';
import { useParams } from 'react-router-dom';
import announcements from '../../data/announcements.json';

const AnnouncementDetail = () => {
  const { id } = useParams();
  const announcement = announcements.find(item => item.id === parseInt(id, 10));
  
  if (!announcement) {
    return <div><h1>Announcement Not Found</h1></div>;
  }
  
  return (
    <div>
      <h1>{announcement.title}</h1>
      <div>Date: {new Date(announcement.date).toLocaleDateString()}</div>
      <p>{announcement.description}</p>
      {/* ... you can add more dynamic content if needed ... */}
    </div>
  );
};

export default AnnouncementDetail;
