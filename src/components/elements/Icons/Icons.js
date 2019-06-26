/* eslint-disable import/prefer-default-export */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Icon = ({name, width, height, className, fill }) => {

  const printIcon = (passedName) => {


    switch(passedName) {
      case "arrow-down":
        return (
          <svg
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            viewBox="0 0 500 500"
          >
            <path d="M410 268l-13-13c-4-4-10-6-16-6s-12 2-16 6l-84 84V72c0-12-9-22-21-22h-19c-12 0-23 10-23 22v268l-84-85c-5-4-10-6-16-6-5 0-11 2-15 6l-13 13c-8 9-8 22 0 31l144 144c5 4 10 7 16 7s11-3 16-7l144-144c8-9 8-22 0-31z" />
          </svg>
        )
        break;
      case "arrow-right":
        return (
          <svg
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            viewBox="0 0 500 500"
          >
            <path d="M444 234L299 90c-4-4-9-6-15-6s-12 2-16 6l-13 13c-4 4-6 10-6 16 0 5 2 11 6 15l84 85H72c-12 0-22 9-22 21v19c0 12 10 22 22 22h268l-85 85c-4 4-6 10-6 16 0 5 2 11 6 15l13 13c4 4 10 6 16 6s11-2 15-6l145-144c4-5 6-10 6-16s-2-11-6-16z"/>
          </svg>
        )
        break;
      default:
        return (
          <div>
            No icon name passed
          </div>
        )
    }
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
  width: '1.5em',
  height: '1.5em',
  className: 'icon',
  fill: 'inherit',
  name: ''
};


export default Icon