import React from 'react';
import { Card } from './Card.jsx';
import './Cards.css';

function Cards({ courses }) {
  const courseData = [];
  Object.values(courses).forEach((courseCategory) =>
    courseCategory.forEach((course) => courseData.push(course))
  );
  return (
    <div className="cards-container">
      {courseData.map((course) => {
        return <Card key={course.id} {...course} />;
      })}
    </div>
  );
}

export { Cards };
