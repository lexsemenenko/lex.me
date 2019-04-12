import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import client from '../../api/contentful';
import ProjectItem from './ProjectItem';

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
    return (
      <div id="projects" className="section section--lines section--muted scrollpoint">
        <div className="group">
          <h2 className="h2 h2__block">
            <span>Projects</span>
          </h2>
          <div data-grid="columns: 12, gutters-row: true">
            <ProjectItem 
              projectState={this.state} 
              handleClick={this.handleClick} 
              closeAll={this.closeAll}/>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeProjects;
