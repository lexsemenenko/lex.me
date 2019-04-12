import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import client from '../../api/contentful';

class HomeProjects extends Component {

  state = {
    homeProjects: [],
    open: []
  };

  // Toggle Open
  handleClick = (indexClicked) => {
    // Click inside 
    this.closeAll() // Close all before opening a new one
    this.setState((prevState) => {
      return { open: prevState.open.map((item, index) => indexClicked === index ? !item : item) }
    });
  };

  closeAll = () => {
    this.setState(() => ({ open: this.state.open.map(item => false) }));
  };
  
  componentDidMount() {
    client
      .getEntries({
        content_type: 'project',
        order: '-sys.createdAt'
      })
      .then(entries => {
        const itemOpen = entries.items.map( () => false);
        this.setState({ 
          homeProjects: entries.items,
          open: itemOpen
        });
      });
  };
  
  render() {
    const { homeProjects, open } = this.state;
    let itemOpen = false;
    return (
      <div id="projects" className="section section--lines section--muted scrollpoint">
        <div className="group">
          <h2 className="h2 h2__block">
            <span>Projects</span>
          </h2>
          <div data-grid="columns: 12, gutters-row: true">
            {homeProjects.map((project, index) => {
              const { projectTitle, projectCompany, projectIntro, projectImage, projectLink, projectSlug } = project.fields;
              const projectKey = `project-${index}`;
              const { url: image } = projectImage.fields.file;
              open[index] ? (itemOpen = true) : (itemOpen = false);
              return (
                <div key={projectKey} data-grid-item="width: 9, width-large: 6, width-large-x: 4">
                  <div className="project__item">
                    <div className="overlay overlay--toggle" data-collapsible={`open: ${itemOpen}`}>
                      <img className="project__image" src={image} alt={projectTitle} />
                      <div className="overlay__content" data-collapsible={`open: ${itemOpen}`}>
                        <button onClick={() => this.closeAll()} type="button" className="overlay__close">
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
                      <button onClick={() => this.handleClick(index)} type="button" className="overlay__toggle" data-collapsible={`open: ${itemOpen}`}>
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
