/* eslint-disable import/prefer-default-export */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Icon = ({name, size, className, fill, ...attrs}) => {
  const classes = classNames('icon', `icon-${name}`, className);

  const printSVGinner = passedName => {
    switch (passedName) {
      case 'arrow-right':
        return (
          <path
            fill="currentColor"
            d="M293 142a21 21 0 0 1 29-29l122 122c4 4 6 9 6 15s-2 11-6 15L322 387c-8 8-21 8-29 0-8-9-8-21 0-29l87-87H70c-11 0-20-10-20-21s9-20 20-20h310l-87-88z"
          />
        );
      case 'arrow-down':
        return (
          <path
            fill="currentColor"
            d="M358 293c8-8 21-8 29 0s8 21 0 29L265 444c-4 4-9 6-15 6s-11-2-15-6L113 322c-8-8-8-21 0-29 9-8 21-8 29 0l87 87V70c0-11 10-20 21-20s20 9 20 20v310l88-87z"
          />
        );
      case 'close':
        return (
          <path
            fill="currentColor"
            d="M56 83c-8-7-8-20 0-27 7-8 20-8 27 0l167 166L417 56c7-8 20-8 27 0 8 7 8 20 0 27L278 250l166 167c8 7 8 20 0 27-7 8-20 8-27 0L250 278 83 444c-7 8-20 8-27 0-8-7-8-20 0-27l166-167L56 83z"
          />
        );
      case 'spin':
        return (
          <path
            fill="currentColor"
            d="M476.6 313.4a12.6 12.6 0 1 0-24.8-4.7 202.8 202.8 0 0 1-200 165.8A202 202 0 0 1 108.3 415a202.9 202.9 0 0 1 0-287.5 202.7 202.7 0 0 1 200.1-51.6l-30.2 24a12.5 12.5 0 0 0-2 17.9 12.4 12.4 0 0 0 17.8 2l49.3-39.4a12.5 12.5 0 0 0 3.4-15.5l-25-57.3a12.7 12.7 0 1 0-23.2 10.3l14.6 33a224.7 224.7 0 0 0-61.1-8.3 228.7 228.7 0 1 0 224.7 270.8z"
          />
        );
      case 'download':
        return (
          <path d="M370 268L250 388 130 268l22-23 82 83V50h32v278l82-83zm80 151H50v31h400zm0 0" />
        );
      case 'linkedin':
        return (
          <path
            fill="currentColor"
            d="M426 426h-73V310c0-27-2-64-39-64-39 0-45 32-45 62v118h-74V188h71v32h2c13-25 41-40 70-39 75 0 88 50 88 114zM111 155a43 43 0 1 1 0-86 43 43 0 0 1 0 86m38 271H74V188h75zM463 0H38C16 0 0 16 0 36v428c0 20 16 36 38 36h425c21 0 37-16 37-36V36c0-20-16-36-37-36"
          />
        );
      case 'github':
        return (
          <path
            fill="#191717"
            d="M250 7a249 249 0 0 0-78 486c12 2 16-7 16-13v-42c-69 15-84-34-84-34-11-28-27-36-27-36-24-15 1-15 1-15 25 1 39 25 39 25 21 39 57 27 72 21 3-16 9-27 15-33-55-7-113-28-113-124 0-26 10-48 26-66-3-6-11-32 2-66 0 0 22-6 69 25 41-11 84-11 124 0 48-31 69-25 69-25 14 34 5 60 2 66 17 18 27 40 27 66 0 96-59 117-115 124 9 7 17 23 17 46v68c0 8 4 15 17 13A249 249 0 0 0 250 7z"
          />
        );
      case 'link':
        return (
          <g fill="currentColor">
            <path d="M432 27H314a18 18 0 1 0 0 37h73L210 242a18 18 0 1 0 26 26L413 91v72a18 18 0 1 0 37 0V46c0-10-8-19-18-19z" />
            <path d="M356 182c-10 0-19 8-19 18v182H87V131h193a18 18 0 1 0 0-37H68c-10 0-18 8-18 19v287c0 10 8 19 18 19h288c10 0 18-9 18-19V200c0-10-8-18-18-18z" />
          </g>
        );
      case 'facebook':
        return (
          <path d="M231 2h37l3 1a246 246 0 0 1 229 230l-1 38-3 21a246 246 0 0 1-178 199l-29 7V323h58l11-72h-68v-54c1-18 13-29 31-30l26-1h14v-62c-25-3-50-7-76-3-27 4-49 17-62 42-8 15-12 31-12 48v60h-63v72h63v174h-2A246 246 0 0 1 5 295l-4-24-1-20 2-22A246 246 0 0 1 207 6l24-4z" />
        );
      case 'google-doc':
        return (
          <path
            fill="currentColor"
            d="M93 50h314c24 0 43 19 43 43v314c0 24-19 43-43 43H93c-24 0-43-19-43-43V93c0-24 19-43 43-43zm46 135l222-1v-45H139zm0 88h222v-46H139zm0 88h156v-46H139z"
          />
        );
      case 'logo':
        return (
          <path
            fill="currentColor"
            d="M39 151h60v146h74V151h162l26 42 28-42h67l-60 96 66 102h-72l-31-48-29 48H39zm195 146h59l32-49-28-45h-64l33 45z"
            paintOrder="stroke"
          />
        );
      default:
        return <div>No icon name passed</div>;
    }
  };

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
  );
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

export default Icon;
