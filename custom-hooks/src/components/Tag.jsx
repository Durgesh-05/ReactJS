import React from 'react';
import './Tag.css';

export const Tag = () => {
  return (
    <div className="tag-container">
      <h3>RANDOM GIF</h3>

      <img src="" alt="Random GIF" className="tag-gif" />

      <p>No GIF to display</p>

      <input
        type="text"
        name="inputText"
        id="inputText"
        value=""
        className="tag-input"
        placeholder="Enter any word"
      />
      <button className="generate-button">Generate</button>
    </div>
  );
};
