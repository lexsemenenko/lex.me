import React, {useState} from 'react'
import PropTypes from 'prop-types'
import CollapsibleItem from './CollapsibleItem'

const CollapsibleList = props => {
  console.log(props)
  const {classBlock, children} = props

  return <div className={`${'projects'}-list`}>hi</div>
}

CollapsibleList.propTypes = {
  children: PropTypes.node,
  classBlock: PropTypes.string,
}

CollapsibleList.defaultProps = {
  children: null,
  classBlock: '',
}
export default CollapsibleList
