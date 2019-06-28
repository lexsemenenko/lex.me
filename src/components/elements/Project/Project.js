import React from 'react';
import Icon from '../Icons';
import Button from '../Button';

const Project = ({project, open, closeAll}) => {
  const {
    company,
    content,
    description,
    id,
    image,
    isActive,
    link,
    name
  } = project;

  const styleToggle = {
    backgroundImage: `url(images/${image})`
  };
  const toggleClasses = isActive ? 'open' : 'closed';

  return (
    <div data-grid-item="width: 6, width-large: 4">
      <div className={`project ${toggleClasses}`}>
        <button
          type="button"
          className={`project__toggle ${toggleClasses}`}
          style={styleToggle}
          id={id}
          onClick={e => {
            open(e);
          }}
        >
          <span className="project__toggle-text">
            <span>{company}</span>
            <span>{name}</span>
          </span>
          <span className="project__icon">
            <span className="hide-v">Open</span>
            <Icon name="arrow-right" size="1.8em" />
          </span>
        </button>

        <div className={`lx-modal ${toggleClasses}`}>
          <div className={`lx-modal__panel ${toggleClasses}`}>
            <div className={`project__content ${isActive ? 'open' : 'closed'}`}>
              <div className="scroll-projects">
                <div className="scroll-projects__header">
                  <div className="project__header">
                    <strong>{name}</strong>
                    <span>{company}</span>
                  </div>
                  <button
                    className="project__close"
                    type="button"
                    onClick={e => {
                      closeAll(e);
                    }}
                  >
                    <Icon name="close" />
                    <span className="hide-v">Close Project</span>
                  </button>
                </div>
                <div className="scroll-projects__body">
                  <div data-grid="columns: 12">
                    <div data-grid-item="width: 8">
                      <p>Project details coming soon...</p>
                      <Button href="#" className="btn-icon-right">
                        View Project
                        <Icon name="link" />
                      </Button>
                    </div>
                    <div data-grid-item="width: 4" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
