import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const Random = () => {
  const [gif, setGif] = useState('');
  console.log(import.meta.env.VITE_GIPHY_API_KEY);
  async function fetchGIF() {
    // uOAoehRR44yq7d1m9rpBM60iZ6hhAFFT
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
    <div>
      <h3>A RANDOM GIF</h3>
      <img src={gif} alt="" />
      <button onClick={clickHandler}>Generate</button>
    </div>
  );
};

// xu2ZzYAghE905GCm2A6ggCxmqS5A62Zx
