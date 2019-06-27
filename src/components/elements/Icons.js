/* eslint-disable import/prefer-default-export */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Icon = ({name, size, className, fill, ...attrs }) => {

  const classes = classNames(
    'icon',
    `icon-${name}`,
    className
  );

  return (
    <svg
      className={classes}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 500 500"
      aria-hidden="true"
      fill={fill}
      {...attrs}
    >
      {printSVGinner(name)}
    </svg>
  )
};

Icon.propTypes = {
  size: PropTypes.string,
  className: PropTypes.string,
  fill: PropTypes.string,
  name: PropTypes.string
};

Icon.defaultProps = {
  size: '1.2em',
  className: '',
  fill: 'currentColor',
  name: ''
};

const printSVGinner = (passedName) => {
  switch(passedName) {
    case "arrow-right":
      return (
        <path fill="currentColor" d="M293 142a21 21 0 0 1 29-29l122 122c4 4 6 9 6 15s-2 11-6 15L322 387c-8 8-21 8-29 0-8-9-8-21 0-29l87-87H70c-11 0-20-10-20-21s9-20 20-20h310l-87-88z"/>
      )
      break;
    case "arrow-down":
      return (
        <path fill="currentColor" d="M358 293c8-8 21-8 29 0s8 21 0 29L265 444c-4 4-9 6-15 6s-11-2-15-6L113 322c-8-8-8-21 0-29 9-8 21-8 29 0l87 87V70c0-11 10-20 21-20s20 9 20 20v310l88-87z"/>
      )
      break;
    case "close":
      return (
        <path fill="currentColor" d="M56 83c-8-7-8-20 0-27 7-8 20-8 27 0l167 166L417 56c7-8 20-8 27 0 8 7 8 20 0 27L278 250l166 167c8 7 8 20 0 27-7 8-20 8-27 0L250 278 83 444c-7 8-20 8-27 0-8-7-8-20 0-27l166-167L56 83z"/>
      )
      break;
    case "spin":
      return (
        <path fill="currentColor" d="M476.6 313.4a12.6 12.6 0 1 0-24.8-4.7 202.8 202.8 0 0 1-200 165.8A202 202 0 0 1 108.3 415a202.9 202.9 0 0 1 0-287.5 202.7 202.7 0 0 1 200.1-51.6l-30.2 24a12.5 12.5 0 0 0-2 17.9 12.4 12.4 0 0 0 17.8 2l49.3-39.4a12.5 12.5 0 0 0 3.4-15.5l-25-57.3a12.7 12.7 0 1 0-23.2 10.3l14.6 33a224.7 224.7 0 0 0-61.1-8.3 228.7 228.7 0 1 0 224.7 270.8z"/>
      )
      break;
    case "download":
      return (
        <path d="M370 268L250 388 130 268l22-23 82 83V50h32v278l82-83zm80 151H50v31h400zm0 0"/>
      )
      break;
    case "linkedin":
      return (
        <path fill="#0a66c2" d="M391 391h-59v-93c0-22-1-51-31-51-31 0-36 25-36 49v95h-59V200h57v26h1c11-20 33-32 56-31 60 0 71 40 71 91zM139 174a34 34 0 1 1 0-69 34 34 0 0 1 0 69m30 217h-60V200h60zM420 50H80c-17 0-30 13-30 29v342c0 16 13 29 30 29h340c17 0 30-13 30-29V79c0-16-13-29-30-29"/>
      )
      break;
    case "github":
      return (
        <path fill="#191717" d="M250 55a200 200 0 0 0-63 390c10 2 13-5 13-10v-34c-55 12-67-27-67-27-9-23-22-29-22-29-19-12 1-12 1-12 20 1 31 20 31 20 17 31 46 22 58 17 2-13 7-22 12-27-44-5-91-22-91-99 0-21 8-39 21-53-2-5-9-26 2-53 0 0 17-5 55 20a194 194 0 0 1 100 0c38-25 55-20 55-20 11 27 4 48 2 53 13 14 21 32 21 53 0 77-47 94-92 99 7 6 14 19 14 37v55c0 6 3 12 13 10a200 200 0 0 0-63-390z"/>
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

export default Icon