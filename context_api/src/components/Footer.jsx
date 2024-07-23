import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import './Footer.css';

export const Footer = () => {
  const { page, totalPages, pageChangeHandler } = useContext(AppContext);

  return (
    <div className="footer">
      <div>
        {page > 1 && (
          <button onClick={() => pageChangeHandler(page - 1)}>Previous</button>
        )}
        {page < totalPages && (
          <button onClick={() => pageChangeHandler(page + 1)}>Next</button>
        )}
      </div>
      <p>
        Page {page} of {totalPages}
      </p>
    </div>
  );
};
