import { useState } from 'react';
import './App.css';
import { Testimonials } from './components/Testimonials';
import reviews from './data';

function App() {
  return (
    <div className="container">
      {/* Heading */}
      <div className="heading">
        <h1>Our Testimonials</h1>
      </div>
      {/* Underlining */}
      <div className="underline"></div>
      <div className="testimonials">
        <Testimonials reviews={reviews} />
      </div>
    </div>
  );
}

export default App;
