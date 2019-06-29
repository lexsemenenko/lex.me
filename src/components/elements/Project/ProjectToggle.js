import React, {useContext} from 'react';
import Icon from '../Icons';
import {contextProjectsToggle} from './StoreContentful';

const ProjectToggle = ({id, fields, toggleClass}) => {
  const {projectTitle, projectCompany, projectImage} = fields;
  const imageUrl = projectImage.fields.file.url;

  const [state, dispatch] = useContext(contextProjectsToggle);

  const toggle = clickedID => {
    const newState = state.map(item => {
      if (item.id === clickedID) {
        if (!item.isActive) {
          return {...item, ...{isActive: true}};
        }
        return {...item, ...{isActive: false}};
      }
      return item;
    });
    dispatch({
      type: 'TOGGLE',
      newState
    });
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
      <div>{projectTitle}</div>
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
