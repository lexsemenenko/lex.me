import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const CollapsibleContent = ({children}) => {
  useEffect(() => {}, [])

  return <div className="collapsible__content">{children}</div>
}

CollapsibleContent.propTypes = {
  children: PropTypes.node,
  // className: PropTypes.string,
}

CollapsibleContent.defaultProps = {
  children: null,
  // className: '',
}

export default CollapsibleContent
