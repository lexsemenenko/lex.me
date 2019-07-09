import React from 'react';
import StoreContentful from '../../elements/Project/StoreContentful';

const HomeProjects = () => {
  return (
    <div className="group">
      <h2 className="section__title">
        <span>Projects</span>
      </h2>
      <div data-grid="columns: 12">
        <div data-grid-item="width: 8, offset: 2, width-large: 6, offset-large: 3">
          <p className="t-lead t-center">
            Below, you can see some projects I&apos;ve been working on lately.
          </p>
        </div>
      </div>
      <StoreContentful />
    </div>
  );
};

export default HomeProjects;
