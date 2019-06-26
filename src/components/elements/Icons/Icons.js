/* eslint-disable import/prefer-default-export */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Icon = ({name, width, height, className, fill }) => {

  const printIcon = (passedName) => {

    if (passedName = "arrowDown") return (
      <div className={className}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={width}
          height={height}
          viewBox="0 0 500 500"
        >
          <path d="M410 268l-13-13c-4-4-10-6-16-6s-12 2-16 6l-84 84V72c0-12-9-22-21-22h-19c-12 0-23 10-23 22v268l-84-85c-5-4-10-6-16-6-5 0-11 2-15 6l-13 13c-8 9-8 22 0 31l144 144c5 4 10 7 16 7s11-3 16-7l144-144c8-9 8-22 0-31z" />
        </svg>
      </div>
    )
  }
  return (
    <>{printIcon(name)}</>
  )
};

Icon.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  className: PropTypes.string,
  fill: PropTypes.string,
  name: PropTypes.string
};

Icon.defaultProps = {
  width: '3.5em',
  height: '3.5em',
  className: 'icon',
  fill: '',
  name: ''
};


export default Icon