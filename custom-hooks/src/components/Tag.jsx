import React, { useState } from 'react';
import './Tag.css';
import { useGif } from '../hooks/useGif';

export const Tag = () => {
  const [tag, setTag] = useState('ironman');
  const [gif, fetchGIF] = useGif(tag);

  function clickHandler() {
    fetchGIF();
  }

  function changeHandler(event) {
    setTag(event.target.value);
  }

  return (
    <div className="tag-container">
      <h3>RANDOM {tag} GIF</h3>

      {gif ? <img src={gif} className="random-gif" /> : <p>Loading...</p>}

      <input
        type="text"
        name="inputText"
        id="inputText"
        value={tag}
        onChange={changeHandler}
        className="tag-input"
        placeholder="Enter any word"
      />
      <button onClick={clickHandler} className="generate-button">
        Generate
      </button>
    </div>
  );
};
