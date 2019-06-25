import React, { useContext, useState } from 'react';
import { contextProjects } from './StoreProjects';
import Project from './Project';
import Pagination from './Pagination';

const Projects = () => {
  const [state, dispatch] = useContext(contextProjects);

  // Toggle Open/Close Functions
  // ===========================================================================

  const open = e => {
    e.preventDefault();
    const newArr = state.map(item => {
      // Open Current
      if (item.id === e.currentTarget.id) {
        const part = { isActive: true };
        return { ...item, ...part };
      }
      // Close Rest
      const part = { isActive: false };
      return { ...item, ...part };
    });
    dispatch({ type: 'OPEN_PROJECT', newState: newArr });
    document.body.classList.add('project__body-scroll');
  };

  const closeAll = e => {
    const newArr = state.map(item => {
      // Close All
      const part = { isActive: false };
      return { ...item, ...part };
    });
    dispatch({ type: 'CLOSE_ALL_PROJECTS', newState: newArr });
    document.body.classList.remove('project__body-scroll');
  };

  // Pagination
  // ===========================================================================
  const [currentPage, setCurrentPage] = useState(1);
  const [projectsPerPage, setProjectsPerPage] = useState(6);

  // Get current projects
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = state.slice(indexOfFirstProject, indexOfLastProject);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);
  return (
    <>
      <Pagination
        projectsPerPage={projectsPerPage}
        totalProjects={state.length}
        paginate={paginate}
      />
      <div data-grid="columns: 12, gutters-row: true">
        {currentProjects.map((project, i) => {
          const uniqueKey = `project${i.toString()}`;
          return (
            <Project
              key={uniqueKey}
              project={project}
              open={open}
              closeAll={closeAll}
            />
          );
        })}
      </div>
    </>
  );
};

export default Projects;
