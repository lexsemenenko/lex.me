import React from 'react';
import ProjectToggle from './ProjectToggle';
import ProjectContent from './ProjectContent';

const Project = ({id, fields, isActive}) => {
  const toggleClass = isActive ? 'open' : 'closed';
  return (
    <li data-grid-item="width: 6, width-large: 4">
      <div className={`project ${toggleClass}`}>
        <ProjectToggle id={id} fields={fields} toggleClass={toggleClass} />
        <ProjectContent id={id} fields={fields} toggleClass={toggleClass} />
      </div>
    </li>
  );
};

export default Project;
