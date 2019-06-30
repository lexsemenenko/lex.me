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
      offset: 0,
      // offsetElement: '#header',
      offsetNudge: 0
    });
  });

  return (
    <ul className={classes}>
      {stateSpSections.map(({id, isActive}) => {
        let title;
        id === 'intro' && (title = 'Intro');
        id === 'about' && (title = 'About');
        id === 'projects' && (title = 'Projects');
        id === 'contact' && (title = 'Contact');
        return (
          <li key={id}>
            <a href={`/#${id}`} className={isActive ? 'active' : ''}>
              {title}
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
