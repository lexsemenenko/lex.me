import { Link } from 'react-router-dom';
import React from 'react';
import { connect } from 'react-redux';

const ProjecItem = props => {
  // console.log(props.stateProjects, 'New Store');
  // console.log(props.projectState.homeProjects, 'Old Store');
  const { homeProjects, open } = props.projectState;
  let itemOpen = false;
  return homeProjects.map((project, index) => {
    const { projectTitle, projectCompany, projectIntro, projectImage, projectLink, projectSlug } = project.fields;
    const projectKey = `project-${index}`;
    const { url: image } = projectImage.fields.file;

    if (open[index]) {
      itemOpen = true;
    } else {
      itemOpen = false;
    }
    return (
      <div key={projectKey} data-grid-item="width: 9, width-large: 6, width-large-x: 4">
        <div className="project__item">
          <div className="overlay overlay--toggle" data-collapsible={`open: ${itemOpen}`}>
            <img className="project__image" src={image} alt={projectTitle} />
            <div className="overlay__content" data-collapsible={`open: ${itemOpen}`}>
              <button onClick={() => props.closeAll()} type="button" className="overlay__close">
                <span>Close</span>
              </button>
              <h3 className="project__name">{projectTitle}</h3>
              <p className="project__detail">{projectCompany}</p>
              <p className="project__description">{projectIntro}</p>
              <a href={projectLink} target="_blank" rel="noreferrer noopener">
                View
              </a>
              <Link to={`project/${projectSlug}`}>Single</Link>
            </div>
            <button onClick={() => props.handleClick(index)} type="button" className="overlay__toggle" data-collapsible={`open: ${itemOpen}`}>
              <span>Open</span>
            </button>
          </div>
        </div>
      </div>
    );
  });
};

const mapStateToProps = state => {
  return {
    stateUi: state.ui,
    stateProjects: state.projects
  };
};

export default connect(mapStateToProps)(ProjecItem);
