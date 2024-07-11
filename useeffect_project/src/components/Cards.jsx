import React, { useState } from 'react';
import { Card } from './Card.jsx';
import './Cards.css';

function Cards({ courses, category }) {
  const [likedCourses, setLikedCourses] = useState([]);
  function getCourses() {
    if (category === 'All') {
      let allCourses = [];
      Object.values(courses).forEach((courseCategory) =>
        courseCategory.forEach((course) => allCourses.push(course))
      );
      return allCourses;
    } else {
      return courses[category];
    }
  }

  return (
    <div className="cards-container">
      {getCourses().map((course) => {
        return (
          <Card
            key={course.id}
            {...course}
            likedCourses={likedCourses}
            setLikedCourses={setLikedCourses}
          />
        );
      })}
    </div>
  );
}

export { Cards };
