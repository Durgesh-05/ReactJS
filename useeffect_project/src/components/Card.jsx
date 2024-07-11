import React from 'react';
import './Card.css';
import { FcLike, FcLikePlaceholder } from 'react-icons/fc';
import { toast } from 'react-toastify';

function Card({
  id,
  title,
  description,
  image,
  likedCourses,
  setLikedCourses,
}) {
  function buttonHandler() {
    if (likedCourses.includes(id)) {
      //already liked
      setLikedCourses((prev) => prev.filter((cid) => cid !== id));
      toast.warning('Liked Removed');
    } else {
      //not liked
      if (likedCourses.length === 0) {
        setLikedCourses([id]);
      } else {
        setLikedCourses((prev) => [...prev, id]);
      }
      toast.success('Liked Added');
    }
  }
  return (
    <div className="card">
      <div className="img-container">
        <img src={image.url} alt={image.alt} />
        <button className="like-button" onClick={buttonHandler}>
          {likedCourses.includes(id) ? (
            <FcLike fontSize="1.75rem" />
          ) : (
            <FcLikePlaceholder fontSize="1.75rem" />
          )}
        </button>
      </div>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
}

export { Card };
