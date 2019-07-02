import React, {useState} from 'react';

const Pagination = ({projectsPerPage, totalProjects, paginate}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProjects / projectsPerPage); i += 1) {
    pageNumbers.push({number: i, isActive: false});
    pageNumbers[0].isActive = true;
  }

  const [state, setState] = useState(pageNumbers);
  const makeActive = num => {
    setState(
      state.map((item, i) => {
        if (i === num - 1) {
          return {number: i + 1, isActive: true};
        }
        return {number: i + 1, isActive: false};
      })
    );
  };
  return (
    <ul className="pagination">
      {state.map(({number, isActive}) => (
        <li
          key={number}
          className={`pagination__item ${isActive ? 'active' : ''}`}
        >
          <button
            type="button"
            className={`pagination__button ${isActive ? 'active' : ''}`}
            onClick={() => {
              paginate(number);
              makeActive(number);
              document.getElementById("projects")
                .scrollIntoView(
                  { block: 'start',  
                  behavior: 'smooth'
                });
            }}
          >
            {number}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
