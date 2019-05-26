import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import CollapsibleToggle from './CollapsibleToggle'

const CollapsibleList = ({children}) => {
  const getChildrenIDs = children => {
    return children.map(child => {
      return child.props.id
    })
  }
  const [state, changeState] = useState({})

  const setState = id => {
    // Toggle currently clicked one
    if (state[id] === true) {
      state[id] = false
    } else {
      state[id] = true
    }

    // Close all except the currently clicked
    Object.keys(state).map(key => {
      if (id !== key) {
        state[key] = false
      }
    })
    console.log(state)
  }

  const renderCollapsibles = () => {
    return getChildrenIDs(children).map((id, index) => {
      const {props} = children[index]
      const name = props.children
      return (
        <CollapsibleToggle id={id} onChangeActive={setState}>
          {name}
        </CollapsibleToggle>
      )
    })
  }

  useEffect(() => {}, [])

  return <div className="collapsible-list">{renderCollapsibles()}</div>
}

CollapsibleList.propTypes = {
  children: PropTypes.node,
  // className: PropTypes.string,
}

CollapsibleList.defaultProps = {
  children: null,
  // className: '',
}

export default CollapsibleList
