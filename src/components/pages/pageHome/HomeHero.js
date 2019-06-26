import React, { useEffect, useState } from 'react';
import scrollpoints from '../../../js/modules/moudle--scrollpoints';
import MenuScroll from '../../partials/MenuScroll';
import Icon from '../../elements/Icons/Icons';

const HomeHero = () => {
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

    const header = document.getElementById('header');

    window.addEventListener('scroll', () => {
      toggleMenuSticky(scrollpointsMenuInstance.get());
      scrollpointsMenuInstance.get()[0].isActive
        ? header.classList.add('active')
        : header.classList.remove('active');
    });
  };

  // Component Did Mount
  useEffect(() => {
    getMenuScrollpoint();
  }, []);

  return (
    <div className="group">
      <div className="hero">
        <div className="hero__text">
          <h1 className="h1 t-bold">Front-End & Web Developer</h1>
          <strong className="h2 t-normal">Lex Semenenko</strong>
          <a className="hero__arrow" href="#about">
            <Icon name="arrow-down" size="1.8em"/>
          </a>
        </div>
        <div className="hero__menu">
          <div
            id="menu"
            className={`scrollpoint--menu ${stateMenuSticky[0].isActive &&
              'active'}`}
          >
            <MenuScroll className="menu-scroll" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
