import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

export const NotFound = () => {
  return (
    <div className="notfound-container">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>We're sorry, but the page you were looking for doesn't exist.</p>
      <Link to="/" className="home-link">
        Go to Home
      </Link>
    </div>
  );
};
