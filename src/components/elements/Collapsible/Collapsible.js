import React, {useContext} from 'react'
import classNames from 'classnames'
import {contextCollapsibles} from './StoreCollapsibles'
import CollapsibleToggle from './CollapsibleToggle'
import CollapsibleContent from './CollapsibleContent'

const Collapsible = ({children}) => {
  const [state, dispatch] = useContext(contextCollapsibles)

  const toggle = idClicked => {
    const newState = state.map(item => {
      const itemIsClicked = item.id === idClicked
      if (itemIsClicked) {
        if (!item.isActive) {
          return {...item, ...{isActive: true}}
        }
        return {...item, ...{isActive: false}}
      }

      // For all Others
      return item
    })
    dispatch({
      type: 'TOGGLE',
      newState,
    })
  }

  return (
    <>
      {children.map(({props}, index) => {
        const {id} = props
        const toggleClass = state[index].isActive ? 'open' : 'closed'
        const classes = classNames('collapsible', toggleClass)
        return (
          <div className={classes}>
            {props.children.map((itemChild, i) => {
              if (i === 0)
                return (
                  <CollapsibleToggle toggle={toggle} id={id}>
                    {itemChild.props.children}
                  </CollapsibleToggle>
                )
              if (i === 1)
                return (
                  <CollapsibleContent id={id}>
                    {itemChild.props.children}
                  </CollapsibleContent>
                )
            })}
          </div>
        )
      })}
    </>
  )
}

export default Collapsible
