import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Image = ({src, alt, className, width, height, circle, ...attrs}) => {
  const classes = classNames(className, {circle});
  return <img src={src} alt={alt} className={classes} {...attrs} />;
};

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  circle: PropTypes.bool,
  className: PropTypes.string
};

Image.defaultProps = {
  src: ``,
  alt: 'image',
  width: 640,
  height: 360,
  circle: false,
  className: undefined
};

export default Image;
