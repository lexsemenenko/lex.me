import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const CollapsibleToggle = ({children, id, onChangeActive}) => {
  return (
    <button
      type="button"
      className="collapsible__toggle"
      id={id}
      onClick={() => {
        onChangeActive(id)
      }}
    >
      {children}
    </button>
  )
}

CollapsibleToggle.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string,
  activeItem: PropTypes.string,
}

CollapsibleToggle.defaultProps = {
  children: null,
  id: ``,
  activeItem: ``,
}

export default CollapsibleToggle
