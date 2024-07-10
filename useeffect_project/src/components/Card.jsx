import React from 'react';
import './Card.css';
import { FcLike } from 'react-icons/fc';

function Card({ title, description, image }) {
  return (
    <div className="card">
      <div className="img-container">
        <img src={image.url} alt={image.alt} />
        <button className="like-button">
          <FcLike fontSize="1.75rem" />
        </button>
      </div>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
}

export { Card };
