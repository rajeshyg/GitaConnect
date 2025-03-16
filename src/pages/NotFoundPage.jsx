import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="not-found">
      <h1>Page Not Found</h1>
      <p>The page you're looking for isn't available.</p>
      <Link to="/" className="ios-button">Go to Home</Link>
    </div>
  );
};

export default NotFoundPage;
