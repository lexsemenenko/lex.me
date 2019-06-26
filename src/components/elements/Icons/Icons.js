/* eslint-disable import/prefer-default-export */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Icon = ({name, size, className, fill }) => {

  const printIcon = (passedName) => {


    switch(passedName) {
      case "arrow-right":
        return (
          <svg
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 500 500"
          >
            <path d="M293 142a21 21 0 0 1 29-29l122 122c4 4 6 9 6 15s-2 11-6 15L322 387c-8 8-21 8-29 0-8-9-8-21 0-29l87-87H70c-11 0-20-10-20-21s9-20 20-20h310l-87-88z"/>
          </svg>
        )
        break;
      case "arrow-down":
        return (
          <svg
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 500 500"
          >
            <path d="M358 293c8-8 21-8 29 0s8 21 0 29L265 444c-4 4-9 6-15 6s-11-2-15-6L113 322c-8-8-8-21 0-29 9-8 21-8 29 0l87 87V70c0-11 10-20 21-20s20 9 20 20v310l88-87z"/>
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