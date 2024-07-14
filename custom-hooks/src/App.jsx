import { useState } from 'react';
import './App.css';
import { Random } from './components/Random';
import { Tag } from './components/Tag';

function App() {
  return (
    <div className="app-container">
      <h1>RANDOM GIFS</h1>
      <div className="gif-container">
        <Random />
        <Tag />
      </div>
    </div>
  );
}

export default App;
