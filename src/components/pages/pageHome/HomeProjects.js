import React from 'react';
import StoreProjects from '../../elements/Project/StoreProjects';
import Projects from '../../elements/Project/Projects';

const HomeProjects = () => {
  return (
    <div className="group">
      <h2 className="section__title">
        <span>Projects</span>
      </h2>
      <StoreProjects>
        <Projects />
      </StoreProjects>
    </div>
  );
};

export default HomeProjects;
