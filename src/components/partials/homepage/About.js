import React, { Component } from 'react';
import client from '../../api/contentful';
import Dropdown from '../Dropdown';

class HomeAbout extends Component {
  constructor() {
    super();
    this.state = { aboutPage: [] };
  }

  componentDidMount() {
    client.getEntry('NzRZI1FImgLEWgXnJRRlO').then(entry => {
      this.setState({
        aboutPage: {
          title: entry.fields.title,
          intro: entry.fields.intro
        }
      });
    });
  }

  render() {
    const { aboutPage } = this.state;
    const { title, intro } = aboutPage;
    return (
      <div id="about" className="section section--lines scrollpoint">
        <div className="group">
          <h2 className="h2 h2__block">
            <span>{title}</span>
          </h2>
          <div data-grid="columns: 12">
            <div data-grid-item="width: 12, width-large: 6">
              <p className="t-large">{intro}</p>
            </div>
          </div>
          <Dropdown />
        </div>
      </div>
    );
  }
}

export default HomeAbout;
