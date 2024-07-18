import React from 'react';
import './Random.css';
import { useGif } from '../hooks/useGif';

export const Random = () => {
  const [gif, fetchGIF] = useGif('');

  function clickHandler() {
    fetchGIF();
  }

  return (
    <div className="random-container">
      <h3>A RANDOM GIF</h3>
      {gif ? <img src={gif} className="random-gif" /> : <p>Loading...</p>}
      <button onClick={clickHandler} className="generate-button">
        Generate
      </button>
    </div>
  );
};
