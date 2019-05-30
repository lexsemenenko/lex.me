import React from 'react'
import PropTypes from 'prop-types'
import Image from '../Image'

const CollapsibleItem = props => {
  const {id, isActive, onChangeActive, projectData, classBlock} = props
  const {company, content, description, image, link, name} = projectData
  return (
    <>
      <button
        type="button"
        className={`${classBlock}__toggle ${isActive ? 'open' : 'closed'}`}
        id={id}
        onClick={e => {
          onChangeActive(e)
        }}
      >
        <Image src={`images/${image}`} alt={name} />
      </button>
      <div className={`${classBlock}__content ${isActive ? 'open' : 'closed'}`}>
        <div>
          <strong>{name}</strong>
        </div>
        <div>{company}</div>
        <div>{link}</div>
        <div>{content}</div>
      </div>
    </>
  )
}

CollapsibleItem.propTypes = {
  id: PropTypes.string,
  isActive: PropTypes.bool,
  classBlock: PropTypes.string,
}

CollapsibleItem.defaultProps = {
  id: ``,
  isActive: false,
  classBlock: '',
}

export default CollapsibleItem
