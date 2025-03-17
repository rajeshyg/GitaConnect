import React from 'react';
import { useParams, Link } from 'react-router-dom';
import opportunities from '../../data/opportunities.json'; // import JSON data

const Opportunities = () => {
  const { id } = useParams();

  if (id) {
    const opp = opportunities.find(item => item.id === parseInt(id, 10));
    if (!opp) {
      return <div><h1>Opportunity Not Found</h1></div>;
    }
    return (
      <div>
        <h1>{opp.title}</h1>
        <p>{opp.description}</p>
        {/* Render Express Interest and Comments links only if available */}
        {opp.interestLink && (
          <Link to={opp.interestLink} className="ios-button">Express Interest</Link>
        )}
        {opp.commentLink && (
          <Link to={opp.commentLink} className="ios-button">Add Comments</Link>
        )}
      </div>
    );
  }

  return (
    <div>
      <h1>Opportunities</h1>
      <p>List of available opportunities...</p>
      {/* ...existing code for list view can be enhanced to use the JSON data if needed... */}
    </div>
  );
};

export default Opportunities;
