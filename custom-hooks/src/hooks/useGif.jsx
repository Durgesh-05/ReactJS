import React, { useState, useEffect } from 'react';
import axios from 'axios';
const apiUrl = `https://api.giphy.com/v1/gifs/random?api_key=${
  import.meta.env.VITE_GIPHY_API_KEY
}`;

function useGif(tag) {
  const [gif, setGif] = useState('');

  async function fetchGIF() {
    const url = tag ? `${apiUrl}&tag=${tag}` : apiUrl;
    const { data } = await axios.get(url);

    const imageSource = data.data.images.original.url;
    setGif(imageSource);
  }

  useEffect(() => {
    fetchGIF();
  }, []);

  return [gif, fetchGIF];
}

export { useGif };
