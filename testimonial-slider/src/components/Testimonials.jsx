import React, { useState } from 'react';
import { Card } from './Card';

function Testimonials(props) {
  const reviews = props.reviews;
  const [index, setIndex] = useState(0);
  return (
    <div>
      <Card
        index={index}
        review={reviews[index]}
        length={reviews.length}
        setIndex={setIndex}
      />
    </div>
  );
}

export { Testimonials };
