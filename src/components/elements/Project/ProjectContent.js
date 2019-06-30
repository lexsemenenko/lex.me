import React, {useContext} from 'react';
import marked from 'marked';
import Icon from '../Icons';
import Button from '../Button';
import {contextProjectsToggle} from './StoreContentful';

const ProjectContent = ({id, fields, toggleClass}) => {
  const {projectTitle, projectCompany, projectMarkdown} = fields;

  const [state, dispatch] = useContext(contextProjectsToggle);

  const close = clickedID => {
    const newState = state.map(item => {
      if (item.id === clickedID) {
        if (item.isActive) {
          return {...item, ...{isActive: false}};
        }
      }
      return item;
    });
    dispatch({
      type: 'TOGGLE',
      newState
    });
  };

  const getParsedMarkdown = field => {
    return {__html: marked(field, {sanitize: true})};
  };

  return (
    <div className={`lx-modal ${toggleClass}`}>
      <div className={`lx-modal__panel ${toggleClass}`}>
        <div className={`project__content ${toggleClass}`}>
          <div className="scroll-projects">
            <div className="scroll-projects__header">
              <div className="project__header">
                <strong>{projectTitle}</strong>
                <span>{projectCompany}</span>
              </div>
              <button
                className="project__close"
                type="button"
                onClick={() => {
                  close(id);
                }}
              >
                <Icon name="close" />
                <span className="hide-v">Close Project</span>
              </button>
            </div>
            <div className="scroll-projects__body">
              <div data-grid="columns: 12">
                <div data-grid-item="width: 8">
                  <div
                    className="wysiwyg"
                    dangerouslySetInnerHTML={getParsedMarkdown(projectMarkdown)}
                  />
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
  );
};

export default ProjectContent;
