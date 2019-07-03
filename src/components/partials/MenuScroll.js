import React, {useEffect, useContext} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import contextUi from '../context/contextUi';
import anchorsScroll from '../../js/modules/module--anchorsScroll';

const MenuScroll = ({className}) => {
  const {stateSpSections} = useContext(contextUi);

  const classes = classNames(className);

  useEffect(() => {
    anchorsScroll({
      element: `.${classes} a`,
      offset: 55, // Static for now (nudging ~ height of collapsed header)
      // offsetElement: 'header', // should be ID for now
      offsetNudge: 0
    });
  });

  return (
    <ul className={classes}>
      {stateSpSections.map(({id, isActive}) => {
        let linkName;
        id === 'intro' && (linkName = 'Intro');
        id === 'about' && (linkName = 'About');
        id === 'projects' && (linkName = 'Projects');
        id === 'contact' && (linkName = 'Contact');
        return (
          <li key={id}>
            <a href={`/#${id}`} className={isActive ? 'active' : ''}>
              {linkName}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

MenuScroll.propTypes = {
  className: PropTypes.string
};

MenuScroll.defaultProps = {
  className: ''
};

export default MenuScroll;
