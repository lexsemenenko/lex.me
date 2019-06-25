import React from 'react';
import StoreProjects from '../../elements/Project/StoreProjects';
import Projects from '../../elements/Project/Projects';

const HomeProjects = () => {
  return (
    <div className="group">
      <h2 className="h2 h2__block">
        <span>Projects</span>
      </h2>
      <StoreProjects>
        <Projects />
      </StoreProjects>
    </div>
  );
};

export default HomeProjects;
