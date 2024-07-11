import React from 'react';
import {
  FaQuoteLeft,
  FaQuoteRight,
  FaAngleLeft,
  FaAngleRight,
} from 'react-icons/fa';
import './Card.css';

function Card(props) {
  const review = props.review;
  const { index, setIndex, length } = props;

  function surpriseMeHandler() {
    const randomIndex = Math.floor(Math.random() * length);
    setIndex(randomIndex);
  }

  function leftHandler() {
    if (index === 0) {
      setIndex(length - 1);
    } else {
      setIndex(index - 1);
    }
  }

  function rightHandler() {
    if (index === length - 1) {
      props.setIndex(0);
    } else {
      props.setIndex(index + 1);
    }
  }

  return (
    <div className="card-container">
      <div className="image-container">
        <img src={review.image} alt={review.name} />
      </div>
      <div className="card">
        <div className="card-content">
          <h2>{review.name}</h2>
          <p>{review.job}</p>
          <div className="quote-icon">
            <FaQuoteLeft />
          </div>
          <p>{review.text}</p>
          <div className="quote-icon">
            <FaQuoteRight />
          </div>
          <div className="buttons">
            <button onClick={leftHandler}>
              <FaAngleLeft />
            </button>
            <button onClick={rightHandler}>
              <FaAngleRight />
            </button>
          </div>
          <button className="submit-button" onClick={surpriseMeHandler}>
            Surprise Me
          </button>
        </div>
      </div>
    </div>
  );
}

export { Card };
