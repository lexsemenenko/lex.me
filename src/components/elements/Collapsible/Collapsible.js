import React, {useContext} from 'react';
import classNames from 'classnames';
import {contextCollapsibles} from './StoreCollapsibles';
import CollapsibleToggle from './CollapsibleToggle';
import CollapsibleContent from './CollapsibleContent';

const Collapsible = ({children}) => {
  const [state, dispatch] = useContext(contextCollapsibles);

  const toggle = idClicked => {
    const newState = state.map(item => {
      const itemIsClicked = item.id === idClicked;
      if (itemIsClicked) {
        if (!item.isActive) {
          return {...item, ...{isActive: true}};
        }
        return {...item, ...{isActive: false}};
      }

      // For all Others
      return item;
    });
    dispatch({
      type: 'TOGGLE',
      newState
    });
  };

  return (
    <>
      {children.map(({props}, i) => {
        const {id} = props;
        const toggleClass = state[i].isActive ? 'open' : 'closed';
        const classes = classNames('collapsible', toggleClass);
        const uniqueKey = `collapsible${id}`;
        return (
          <div className={classes} key={uniqueKey}>
            {props.children.map((itemChild, j) => {
              const uniqueKey2 = `collapsible${id}-${j}`;
              if (j === 0)
                return (
                  <CollapsibleToggle toggle={toggle} id={id} key={uniqueKey2}>
                    {itemChild.props.children}
                  </CollapsibleToggle>
                );
              if (j === 1)
                return (
                  <CollapsibleContent id={id} key={uniqueKey2}>
                    {itemChild.props.children}
                  </CollapsibleContent>
                );
            })}
          </div>
        );
      })}
    </>
  );
};

export default Collapsible;
