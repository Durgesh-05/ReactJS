import React from 'react';
import { useNavigate } from 'react-router-dom';

export const About = () => {
  const naviagte = useNavigate();
  function clickHandler() {
    naviagte(-1);
  }
  return (
    <div>
      <div>About</div>
      <button onClick={clickHandler}>Go Back</button>
    </div>
  );
};
