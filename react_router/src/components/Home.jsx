import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
  const navigate = useNavigate();

  function clickHandler() {
    navigate('/about');
  }
  return (
    <div>
      <div>Home page</div>
      <button onClick={clickHandler}>Move to About Page</button>
     
    </div>
  );
};
