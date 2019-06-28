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
        <path fill="currentColor" d="M426 426h-73V310c0-27-2-64-39-64-39 0-45 32-45 62v118h-74V188h71v32h2c13-25 41-40 70-39 75 0 88 50 88 114zM111 155a43 43 0 1 1 0-86 43 43 0 0 1 0 86m38 271H74V188h75zM463 0H38C16 0 0 16 0 36v428c0 20 16 36 38 36h425c21 0 37-16 37-36V36c0-20-16-36-37-36"/>
      )
      break;
    case "github":
      return (
        <path fill="#191717" d="M250 7a249 249 0 0 0-78 486c12 2 16-7 16-13v-42c-69 15-84-34-84-34-11-28-27-36-27-36-24-15 1-15 1-15 25 1 39 25 39 25 21 39 57 27 72 21 3-16 9-27 15-33-55-7-113-28-113-124 0-26 10-48 26-66-3-6-11-32 2-66 0 0 22-6 69 25 41-11 84-11 124 0 48-31 69-25 69-25 14 34 5 60 2 66 17 18 27 40 27 66 0 96-59 117-115 124 9 7 17 23 17 46v68c0 8 4 15 17 13A249 249 0 0 0 250 7z" />
      )
      break;
    case "pdf":
      return (
        <path fill="currentColor" d="M496 366c-18-32-96-52-165-56l-19-21a467 467 0 0 1-95-245c-1-6-2-17-14-17-4 0-8 2-10 4-4 5-4 10-3 16l4 27a450 450 0 0 1-46 257C72 353 10 393 1 426c-3 11 0 23 8 32 10 10 22 15 35 15 36 0 77-40 122-119a386 386 0 0 1 86-15c20-3 44-4 67-3 56 57 101 86 134 86 19 0 34-9 43-25 5-10 5-21 0-31zM44 446c-6 0-11-2-16-7-1-2-2-4-1-6 5-17 44-46 100-67-32 51-62 80-83 80zm204-133l-26 4-39 6 1-4c20-39 33-86 37-140 18 51 42 94 71 127l3 3-47 4zm225 71c-5 8-11 12-20 12-21 0-54-20-93-57 61 8 105 26 113 40v5z"/>
      )
      break;
    case "link":
      return (
        <g fill="currentColor">
          <path d="M432 27H314a18 18 0 1 0 0 37h73L210 242a18 18 0 1 0 26 26L413 91v72a18 18 0 1 0 37 0V46c0-10-8-19-18-19z"/>
          <path d="M356 182c-10 0-19 8-19 18v182H87V131h193a18 18 0 1 0 0-37H68c-10 0-18 8-18 19v287c0 10 8 19 18 19h288c10 0 18-9 18-19V200c0-10-8-18-18-18z"/>
        </g>
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