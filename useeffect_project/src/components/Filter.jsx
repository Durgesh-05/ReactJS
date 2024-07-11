import React from 'react';
import './Filter.css';
function Filter({ filterData, setCategory }) {
  function clickHandler(title) {
    setCategory(title);
  }
  return (
    <div className="filter-container">
      {filterData.map((data) => {
        return (
          <button
            key={data.id}
            className="filter-button"
            onClick={() => clickHandler(data.title)}
          >
            {data.title}
          </button>
        );
      })}
    </div>
  );
}

export { Filter };
