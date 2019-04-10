import React from 'react';

const HomeHero = () => (
  <div id="intro" className="section section--hero scrollpoint">
    <div className="group">
      <div className="hero">
        <div className="hero__text">
          <h1 className="h1 t-bold">Front-End & Web Developer</h1>
          <strong className="h2 t-normal">Lex Semenenko</strong>
          <a className="hero__arrow" href="#about">
            <svg
              width="30"
              height="30"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              data-svg="arrow-down"
            >
              <polygon points="10.5,16.08 5.63,10.66 6.37,10 10.5,14.58 14.63,10 15.37,10.66" />
              <line
                fill="none"
                stroke="#FA6400"
                x1="10.5"
                y1="4"
                x2="10.5"
                y2="15"
              />
            </svg>
          </a>
        </div>
        <div className="hero__menu">
          <div className="scrollpoint--menu-anchor">
            <ul className="menu-scroll scrollpoints-watch--menu">
              <li data-scrollpoint-watch="intro">
                <a href="/#intro">Intro</a>
              </li>
              <li data-scrollpoint-watch="about">
                <a href="/#about">About</a>
              </li>
              <li data-scrollpoint-watch="projects">
                <a href="/#projects">Projects</a>
              </li>
              <li data-scrollpoint-watch="contact">
                <a href="/#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default HomeHero;
