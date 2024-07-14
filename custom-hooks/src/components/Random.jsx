import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Random.css';

export const Random = () => {
  const [gif, setGif] = useState('');

  async function fetchGIF() {
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${
      import.meta.env.VITE_GIPHY_API_KEY
    }`;
    const { data } = await axios.get(url);

    const imageSource = data.data.images.original.url;
    setGif(imageSource);
  }

  useEffect(() => {
    fetchGIF();
  }, []);

  function clickHandler() {
    fetchGIF();
  }

  return (
    <div className="random-container">
      <h3>A RANDOM GIF</h3>
      {gif ? (
        <img src={gif} alt="Random GIF" className="random-gif" loading="lazy" />
      ) : (
        <p>Loading...</p>
      )}
      <button onClick={clickHandler} className="generate-button">
        Generate
      </button>
    </div>
  );
};
