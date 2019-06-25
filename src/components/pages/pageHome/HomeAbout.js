import React from 'react';
import Button from '../../elements/Button';

const HomeAbout = () => {
  return (
    <div className="group">
      <h2 className="h2 h2__block">
        <span>About</span>
      </h2>
      <div data-grid="columns: 12">
        <div data-grid-item="width: 12, width-large: 6">
          <p className="t-large">
            I am a Pittsburgh based <strong>Front-End </strong> &amp; Web{' '}
            <strong>Developer</strong> by trade with perseverance, curiosity, a
            growth mindset and a passion for emerging tech.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
