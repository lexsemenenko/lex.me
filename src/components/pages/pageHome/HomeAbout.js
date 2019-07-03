import React from 'react';
import Button from '../../elements/Button';
import Icon from '../../elements/Icons';

const HomeAbout = () => {
  return (
    <div className="group">
      <h2 className="section__title">
        <span>About</span>
      </h2>
      <div data-grid="columns: 12">
        <div data-grid-item="width: 8, offset: 2, width-large: 6, offset-large: 3">
          <p className="t-lead t-center">
            I am a Pittsburgh based <strong>Front-End Web Developer</strong> by
            trade with perseverance, curiosity, a growth mindset and a passion
            for emerging tech.
          </p>
          <ul className="social-list">
            <li>
              <Button
                href="https://docs.google.com/document/d/1ivrLanSQRmg7qjInqMjrxkkN3mmmxvl_Z3tWNdtUbak/edit?usp=sharing"
                className="btn-icon"
                target="_blank"
              >
                <Icon name="google-doc" />
                Resume
              </Button>
            </li>
            <li>
              <a
                href="http://github.com/lexsemenenko"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name="github" />
              </a>
            </li>
            <li>
              <a
                href="http://www.linkedin.com/in/lexs/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name="linkedin" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
