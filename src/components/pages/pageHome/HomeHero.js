import React, { useEffect, useState, useContext } from 'react';
import scrollpoints from '../../../js/modules/moudle--scrollpoints';
// import reducerUi from '../../redicers/reducerUi';
import contextUi from '../../context/contextUi';

const HomeHero = () => {
  const { stateSpSections } = useContext(contextUi);

  const [about, setAbout] = useState({
    name: {
      first: 'Lex',
      last: 'Semenenko'
    }
  });

  const [stateMenuSticky, toggleMenuSticky] = useState([
    {
      isActive: false,
      name: undefined
    }
  ]);

  const getMenuScrollpoint = () => {
    const scrollpointsMenuInstance = scrollpoints({
      scrollpoint: '.scrollpoint--menu',
      offset: 0,
      direction: 'down'
    });
    toggleMenuSticky(scrollpointsMenuInstance.get());
    const $header = $('#header');
    scrollpointsMenuInstance.get()[0].isActive ? $header.addClass('active') : $header.removeClass('active');
  };

  // Component Did Mount
  useEffect(() => {
    getMenuScrollpoint();
    $(window).on('scroll', () => {
      getMenuScrollpoint();
    });
  }, []);

  return (
    <div className="group">
      <div className="hero">
        <div className="hero__text">
          <h1 className="h1 t-bold">Front-End & Web Developer</h1>
          <strong className="h2 t-normal">
            {about.name.first} {about.name.last}
          </strong>
          <a className="hero__arrow" href="#about">
            <svg width="30" height="30" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-svg="arrow-down">
              <polygon points="10.5,16.08 5.63,10.66 6.37,10 10.5,14.58 14.63,10 15.37,10.66" />
              <line fill="none" stroke="#FA6400" x1="10.5" y1="4" x2="10.5" y2="15" />
            </svg>
          </a>
        </div>
        <div className="hero__menu">
          <div id="menu" className={`scrollpoint--menu ${stateMenuSticky[0].isActive && 'active'}`}>
            <ul className="menu-scroll">
              <li>
                <a href="/#intro" className={`${stateSpSections.length && stateSpSections[0].isActive ? 'active' : 'not-active'}`}>
                  Intro
                </a>
              </li>
              <li>
                <a href="/#about" className={`${stateSpSections.length && stateSpSections[1].isActive ? 'active' : 'not-active'}`}>
                  About
                </a>
              </li>
              <li>
                <a href="/#projects" className={`${stateSpSections.length && stateSpSections[2].isActive ? 'active' : 'not-active'}`}>
                  Projects
                </a>
              </li>
              <li>
                <a href="/#contact" className={`${stateSpSections.length && stateSpSections[3].isActive ? 'active' : 'not-active'}`}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
