/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomeHero from '../components/partials/homepage/Hero';
import HomeAbout from '../components/partials/homepage/About';
import HomeProjects from '../components/partials/homepage/Projects';
import HomeContact from '../components/partials/homepage/Contact';
import _events from '../js/core/core--events';
import scrollpoints from '../js/modules/moudle--scrollpoints';
import { setActiveSpHome } from '../actions/ui';

class Home extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    setTimeout(() => {
      const currentScrollpoint = scrollpoints({
        scrollpoint: '.scrollpoint',
        offset: 0,
        elementOffset: '#header',
        direction: 'both',
        debug: true
      });
      dispatch(setActiveSpHome(currentScrollpoint.attr('id')));
      $(window).on('scroll', () => {
        const currentScrollpoint = scrollpoints({
          scrollpoint: '.scrollpoint',
          offset: 0,
          elementOffset: '#header',
          direction: 'both',
          debug: true
        });
        dispatch(setActiveSpHome(currentScrollpoint.attr('id')));
      });
    }, 200);
  }

  render() {
    const { homepageSectionActive } = this.props.stateUi.scrollpoint;
    return (
      <div>
        <div id="intro" className="section section--hero scrollpoint scrollpoint--intro">
          <HomeHero />
        </div>
        <div id="about" className="section section--lines scrollpoint scrollpoint--about">
          <HomeAbout />
        </div>
        <div id="projects" className="section section--lines section--muted scrollpoint scrollpoint--projects">
          <HomeProjects />
        </div>
        <div id="contact" className="section section--lines-dark  scrollpoint scrollpoint--contact">
          <HomeContact />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    stateUi: state.ui
  };
};

export default connect(mapStateToProps)(Home);
