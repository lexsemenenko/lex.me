/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomeHero from '../components/partials/homepage/Hero';
import HomeAbout from '../components/partials/homepage/About';
import HomeProjects from '../components/partials/homepage/Projects';
import HomeContact from '../components/partials/homepage/Contact';
import scrollpointsSection from '../js/modules/moudle--scrollpoints';
import { scrollpointHomeSectionActive } from '../actions/ui';

class Home extends Component {

  sp = React.createRef()

  componentDidMount() {
    const scrollpointsArray = [...this.sp.current.childNodes]
    const { dispatch } = this.props;
    setTimeout(() => {
      
      const scrollpointsSectionInstance = scrollpointsSection({
        scrollpoint: '.scrollpoint',
        offset: 0,
        elementOffset: '#header',
        direction: 'both',
        debug: false
      });

      $(window).on('scroll', () => {
        const currentScrollpoint = scrollpointsSectionInstance.get();
        dispatch(scrollpointHomeSectionActive(currentScrollpoint));
        // Adding CSS Class  thrugh using ref set on scrollpoits wrapper.
        currentScrollpoint.map((item, index) => {
            item.isActive ? scrollpointsArray[index].classList.add('active') : scrollpointsArray[index].classList.remove('active')
        })
      });
    }, 400);
  }

  render() {
    return (
      <div ref={this.sp}>
        <div 
          id="intro" 
          className="section section--hero scrollpoint scrollpoint--intro">
          <HomeHero />
        </div>
        <div
          id="about"
          className="section section--lines scrollpoint scrollpoint--about"
        >
          <HomeAbout />
        </div>
        <div  id="projects" className="section section--lines section--muted scrollpoint scrollpoint--projects">
          <HomeProjects />
        </div>
        <div  id="contact" className="section section--lines-dark  scrollpoint scrollpoint--contact">
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
