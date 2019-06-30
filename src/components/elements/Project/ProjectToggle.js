import React, {useContext} from 'react';
import Icon from '../Icons';
import {contextProjectsToggle} from './StoreContentful';

const ProjectToggle = ({id, fields, toggleClass}) => {
  const {projectTitle, projectCompany, projectImage} = fields;
  const imageUrl = projectImage.fields.file.url;

  const [state, dispatch] = useContext(contextProjectsToggle);

  const toggle = clickedID => {
    dispatch({
      type: 'TOGGLE',
      newState: {activeID: clickedID}
    });
    document.body.classList.add('project__body-scroll');
  };

  return (
    <button
      type="button"
      className={`project__toggle ${toggleClass}`}
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
      onClick={() => {
        toggle(id);
      }}
    >
      <span className="project__toggle-text">
        <span>{projectCompany}</span>
        <span>{projectTitle}</span>
      </span>
      <span className="project__icon">
        <span className="hide-v">Open</span>
        <Icon name="arrow-right" size="1.8em" />
      </span>
    </button>
  );
};

export default ProjectToggle;
