import React from 'react';
import Button from '../../elements/Button';
import Icon from '../../elements/Icons';

const HomeAbout = () => {
  const linkedin = "https://github.com/lexsemenenko";
  const github = "https://www.linkedin.com/in/lexs";
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
          <a href={linkedin} target="_blank">
            <Icon name="linkedin" size="3em" fill="#0a66c2"/>
          </a>
          <a href={github} target="_blank">
            <Icon name="github" size="3em" fill="#24292e"/>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
