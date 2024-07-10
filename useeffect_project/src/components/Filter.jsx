import React from 'react';
import './Filter.css';
function Filter({ filterData }) {
  return (
    <div className="filter-container">
      {filterData.map((data) => {
        return (
          <button key={data.id} className="filter-button">
            {data.title}
          </button>
        );
      })}
    </div>
  );
}

export { Filter };
