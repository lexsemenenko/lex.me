import React, {useContext} from 'react';
import marked from 'marked';
import PropTypes from 'prop-types';
import Icon from '../Icons';
import Button from '../Button';
import {contextProjectsToggle} from './StoreContentful';
import Image from '../Image';

const ProjectContent = ({id, fields, toggleClass}) => {
  const {
    projectTitle,
    projectCompany,
    projectMarkdown,
    projectLink,
    projectImage,
    projectTechnologies
  } = fields;

  const imgURL = projectImage ? projectImage.fields.file.url : '';

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
                <div data-grid-item="width: 4, width-large: 4">
                  <Image src={imgURL} />
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
                </div>
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
                  {projectTechnologies && (
                    <>
                      <h4 className="h4">Technologies:</h4>
                      <ul className="project__tech">
                        {projectTechnologies.map(technologyItem => (
                          <li key={technologyItem}>{technologyItem}</li>
                        ))}
                      </ul>
                    </>
                  )}
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

ProjectContent.propTypes = {
  projectImage: PropTypes.string,
  projectTitle: PropTypes.string,
  projectCompany: PropTypes.string,
  projectTechnologies: PropTypes.arrayOf(PropTypes.string),
  projectLink: PropTypes.string
};

ProjectContent.defaultProps = {
  projectImage: null,
  projectTitle: '',
  projectCompany: '',
  projectTechnologies: [],
  projectLink: ''
};
