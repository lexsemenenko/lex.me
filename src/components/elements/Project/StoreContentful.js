import React, {useState, useEffect, createContext, useReducer} from 'react';
import ContentfulClient from './ContentfulClient';
import Project from './Project';
import Pagination from './Pagination';

// Create Context
export const contextProjectsToggle = createContext({});

export const reducerProjectsToggle = (state, action) => {
  switch (action.type) {
    case 'INIT':
      return action.initialState;
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
    []
  );

  // Pagination
  // ===========================================================================

  const [currentPage, setCurrentPage] = useState(1);
  const [projectsPerPage] = useState(3);

  const projectsPaged = projectsArr => {
    const indexOfLastProject = currentPage * projectsPerPage;
    const indexOfFirstProject = indexOfLastProject - projectsPerPage;
    return projectsArr.slice(indexOfFirstProject, indexOfLastProject);
  };
  const paginate = pageNumber => setCurrentPage(pageNumber);

  // ===========================================================================

  // Getting Projects Data from Contentful
  useEffect(() => {
    ContentfulClient.getEntries({
      content_type: 'project'
    }).then(entries => {
      // Setup Projects State
      setProjects({projects: entries.items});

      // Setup Toggle State
      const initialState = entries.items.map((item, index) => {
        const {id} = item.sys;
        return {
          id,
          isActive: false
        };
      });

      dispatchProjectsToggle({
        type: 'INIT',
        initialState
      });
    });
  }, []);

  return (
    <contextProjectsToggle.Provider
      value={[stateProjectsToggle, dispatchProjectsToggle]}
    >
      <ul data-grid="columns: 12, gutters-row: true">
        {gotProjects ? (
          <>
            {projectsPaged(projects).map(({sys, fields}, i) => {
              const {id} = sys;
              if (stateProjectsToggle[i]) {
                const {isActive} = stateProjectsToggle[i];
                return (
                  <Project
                    key={id}
                    id={id}
                    fields={fields}
                    isActive={isActive}
                  />
                );
              }
            })}
          </>
        ) : (
          <div>Loading Projects...</div>
        )}
      </ul>
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
