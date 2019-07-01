import React, {useContext} from 'react';
import marked from 'marked';
import Icon from '../Icons';
import Button from '../Button';
import {contextProjectsToggle} from './StoreContentful';

const ProjectContent = ({id, fields, toggleClass}) => {
  const {projectTitle, projectCompany, projectMarkdown, projectLink} = fields;

  const [state, dispatch] = useContext(contextProjectsToggle);

  const close = clickedID => {
    dispatch({
      type: 'TOGGLE',
      newState: {activeID: false}
    });
    document.body.classList.remove('project__body-scroll');
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
                <div data-grid-item="width: 8, width-large: 7">
                  {projectMarkdown ? (
                    <div
                      className="wysiwyg"
                      dangerouslySetInnerHTML={getParsedMarkdown(
                        projectMarkdown
                      )}
                    />
                  ) : (
                    <div className="wysiwyg">
                      <p>Project details are coming soon...</p>
                    </div>
                  )}
                </div>
                <div data-grid-item="width: 4, width-large: 3, offset-large: 1">
                  {projectLink && (
                    <Button
                      href={projectLink}
                      className="btn-icon-right m-btm"
                      target="_blank"
                    >
                      View Project
                      <Icon name="link" />
                    </Button>
                  )}
                  {/* <p>
                    <strong>Technologies:</strong>
                  </p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectContent;
