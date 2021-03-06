import React, {useState, useEffect, createContext, useReducer} from 'react';
import ContentfulClient from './ContentfulClient';
import Project from './Project';
import Loader from '../Loader';
import Pagination from './Pagination';

// Create Context
export const contextProjectsToggle = createContext({});

export const reducerProjectsToggle = (state, action) => {
  switch (action.type) {
    case 'TOGGLE':
      return action.newState;
    default:
      return state;
  }
};

const StoreContentful = () => {
  const [stateProjects, setProjects] = useState({projects: []});
  const {projects} = stateProjects;
  const gotProjects = !!projects.length;

  const [stateProjectsToggle, dispatchProjectsToggle] = useReducer(
    reducerProjectsToggle,
    {activeID: null}
  );

  // Pagination
  // ===========================================================================

  const [currentPage, setCurrentPage] = useState(1);
  const [projectsPerPage] = useState(6);

  const projectsPaged = projectsArr => {
    const indexOfLastProject = currentPage * projectsPerPage;
    const indexOfFirstProject = indexOfLastProject - projectsPerPage;
    const filtered = projectsArr.slice(indexOfFirstProject, indexOfLastProject);
    return filtered;
  };
  const paginate = pageNumber => setCurrentPage(pageNumber);

  // ===========================================================================

  // Getting Projects Data from Contentful
  useEffect(() => {
    ContentfulClient.getEntries({
      content_type: 'project',
      order: '-fields.projectDate'
    }).then(entries => {
      setProjects({projects: entries.items});
    });
  }, []);

  return (
    <contextProjectsToggle.Provider
      value={[stateProjectsToggle, dispatchProjectsToggle]}
    >
      <>
        {gotProjects ? (
          <ul data-grid="columns: 12, gutters-row: true">
            {projectsPaged(projects).map(({sys, fields}, i) => {
              const {id} = sys;
              let isActive = false;

              if (stateProjectsToggle.activeID === id) {
                isActive = true;
              }

              return (
                <Project key={id} id={id} fields={fields} isActive={isActive} />
              );
            })}
          </ul>
        ) : (
          <Loader />
        )}
      </>
      {gotProjects && (
        <Pagination
          projectsPerPage={projectsPerPage}
          totalProjects={projects.length}
          paginate={paginate}
        />
      )}
    </contextProjectsToggle.Provider>
  );
};

export default StoreContentful;
