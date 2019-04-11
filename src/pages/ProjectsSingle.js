import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import contentful from '../components/api/contentful';

class ProjectsSingle extends Component {
  constructor() {
    super();
    this.state = { project: [] };
  }

  componentDidMount() {
    const { projectSlug } = this.props.match.params;
    if (projectSlug) {
      contentful
        .getEntries({
          content_type: 'project',
          'fields.projectSlug': projectSlug
        })
        .then(entries => {
          this.setState({ project: entries.items[0] });
        });
    }
  }

  render() {
    // eslint-disable-next-line prettier/prettier
    if (this.state.project.length === 0) {
      return <div>Loading....</div>;
    }
    const { projectTitle, projectCompany, projectIntro, projectImage, projectLink, projectSlug } = this.state.project.fields;
    const { url: image } = projectImage.fields.file;
    return (
      <div>
        <br />
        <br />
        <br />
        <br />
        {projectTitle}
        <br />
        {projectCompany}
        <br />
        {projectIntro}
        <br />
        {image}
        <br />
        {projectLink}
        <br />
        {projectSlug}
      </div>
    );

    // console.log(this.state.project, 'got data');

    // console.log(this.state.project.fields);
    // const { projectTitle } = this.state.project.fields;
  }
}

export default ProjectsSingle;
