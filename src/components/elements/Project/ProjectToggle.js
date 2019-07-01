import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icons';
import {contextProjectsToggle} from './StoreContentful';

const ProjectToggle = ({id, fields, toggleClass}) => {
  const {projectTitle, projectCompany, projectImage} = fields;
  const imgURL = projectImage ? projectImage.fields.file.url : '';

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
        backgroundImage: `url(${imgURL})`
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

ProjectToggle.propTypes = {
  projectImage: PropTypes.string,
  projectTitle: PropTypes.string,
  projectCompany: PropTypes.string
};

ProjectToggle.defaultProps = {
  projectImage: null,
  projectTitle: '',
  projectCompany: ''
};
