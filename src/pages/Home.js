/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import HomeHero from '../components/partials/homepage/Hero';
import HomeAbout from '../components/partials/homepage/About';
import HomeProjects from '../components/partials/homepage/Projects';
import HomeContact from '../components/partials/homepage/Contact';

class Home extends Component {
  render() {
    return (
      <div>
        <HomeHero />
        <HomeAbout />
        <HomeProjects />
        <HomeContact />
      </div>
    );
  }
}

export default Home;
