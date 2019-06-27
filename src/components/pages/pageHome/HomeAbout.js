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
          <p className="t-large t-center">
            I am a Pittsburgh based <strong>Front-End </strong> &amp; Web{' '}
            <strong>Developer</strong> by trade with perseverance, curiosity, a
            growth mindset and a passion for emerging tech.
          </p>
          <ul className="social-list">
            <li>
              <a href="http://www.linkedin.com/in/lexs/" target="_blank">
                <Icon name="linkedin" fill="#0a66c2" size="3.3em"/>
              </a>
            </li>
            <li>
              <a href="http://github.com/lexsemenenko" target="_blank">
                <Icon name="github" fill="#24292e" size="3.3em"/>
              </a>
            </li>
            <li>
              <Button href="#">
                Download Resume
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
