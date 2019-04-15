import React, { Component } from 'react';
import { connect } from 'react-redux';
// import scrollpointsMenu from '../../../js/modules/moudle--scrollpoints';
import { homeMenuSticky } from '../../../actions/ui';

class HomeHero extends Component {

  menu = React.createRef()

  componentDidMount() {
    setTimeout(() => {


      $(window).on('scroll', () => {
        // scrollpointsMenu.setSettings({
        //   scrollpoint: '.scrollpoint--menu-anchor',
        //   offset: 0,
        //   elementOffset: '#header',
        //   direction: 'down',
        //   debug: true
        // });
        // console.log(scrollpointsMenu.get())
        // console.log(spInstanceMenu.get())
        // const spMenuObjectWithActive = spInstanceMenu.get();
        // console.log(spMenuObjectWithActive)
        // dispatch(scrollpointHomeSectionActive(currentScrollpoint));
      });
    }, 400);
  }

  render() {
    return (
      <div className="group">
        <div className="hero">
          <div className="hero__text">
            <h1 className="h1 t-bold">Front-End & Web Developer</h1>
            <strong className="h2 t-normal">Lex Semenenko</strong>
            <a className="hero__arrow" href="#about">
              <svg width="30" height="30" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-svg="arrow-down">
                <polygon points="10.5,16.08 5.63,10.66 6.37,10 10.5,14.58 14.63,10 15.37,10.66" />
                <line fill="none" stroke="#FA6400" x1="10.5" y1="4" x2="10.5" y2="15" />
              </svg>
            </a>
          </div>
          <div className="hero__menu">
            <div id="menu" className="scrollpoint--menu-anchor">
              <ul className="menu-scroll">
                <li>
                  <a href="/#intro">Intro</a>
                </li>
                <li>
                  <a href="/#about">About</a>
                </li>
                <li>
                  <a href="/#projects">Projects</a>
                </li>
                <li>
                  <a href="/#contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
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

export default connect(mapStateToProps)(HomeHero);
