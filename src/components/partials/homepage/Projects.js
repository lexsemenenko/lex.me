import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ProjectImage from '../../../images/placeholder--project-2.jpg';
import client from '../../api/contentful';

class HomeProjects extends Component {
  constructor() {
    super();
    this.state = {
      homeProjects: []
    };
  }

  componentDidMount() {
    client
      .getEntries({
        content_type: 'project',
        order: '-sys.createdAt'
      })
      .then(entries => {
        this.setState({ homeProjects: entries.items });
      });
  }

  render() {
    const { homeProjects } = this.state;
    return (
      <div id="projects" className="section section--lines section--muted scrollpoint">
        <div className="group">
          <h2 className="h2 h2__block">
            <span>Projects</span>
          </h2>
          <div data-grid="columns: 12, gutters-row: true">
            {homeProjects.map((project, index) => {
              // eslint-disable-next-line prettier/prettier
              const { 
                projectTitle,
                projectCompany,
                projectIntro,
                projectImage,
                projectLink,
                projectSlug 
              } = project.fields;
              const projectKey = `project-${index}`;
              const { url: image } = projectImage.fields.file;

              return (
                <div key={projectKey} data-grid-item="width: 9, width-large: 6, width-large-x: 4">
                  <div className="project__item">
                    <div className="overlay overlay--toggle" data-collapsible="open: false">
                      <img className="project__image" src={image} alt={projectTitle} />
                      <div className="overlay__content project__item" data-collapsible="open: false">
                        <h3 className="project__name">{projectTitle}</h3>
                        <p className="project__detail">{projectCompany}</p>
                        <p className="project__description">{projectIntro}</p>
                        <a href={projectLink} target="_blank" rel="noreferrer noopener">
                          View
                        </a>
                        <Link to={`project/${projectSlug}`}>Single</Link>
                      </div>
                      <button type="button" className="overlay__toggle" data-collapsible="open: false">
                        <span>Open</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default HomeProjects;
