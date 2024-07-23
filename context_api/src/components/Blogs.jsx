import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import './Blogs.css';

export const Blogs = () => {
  const { loading, posts } = useContext(AppContext);
  return (
    <div className="blogs-container">
      {loading ? (
        <p>Loading...</p>
      ) : posts.length === 0 ? (
        <p>No Posts</p>
      ) : (
        posts.map((post) => (
          <div key={post.id} className="blog-post">
            <h3>{post.title}</h3>
            <div className="blog-meta">
              <p>
                By {post.author} on {post.category}
              </p>
              <p>Posted on {post.date}</p>
            </div>
            <p>{post.content}</p>
            <div className="blog-tags">
              {post.tags.map((tag, index) => (
                <span key={index} className="blog-tag">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
};
