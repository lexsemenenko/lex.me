import React, {useState} from 'react'
import PropTypes from 'prop-types'
import CollapsibleItem from './CollapsibleItem'

const CollapsibleList = props => {
  // Params:        'children` is a default prop of component parent
  //               `classBlock` CSS class basename that I use to make BEM
  //                class system
  const {children, classBlock} = props
  // generateState  Returns object from childrens arrray. I use that object to
  //                create component state where I track item clicked and
  //                projects data.
  const generateState = array =>
    array.reduce((obj, item) => {
      const newObj = obj
      newObj[item.props.id] = item.props
      return newObj
    }, {})
  const [state, setState] = useState(generateState(children))

  // Notes:         On Collapsible click, I check the currently clicked element,
  //                and assign true to isActive item property.
  //                - The edit is done to a copy of an object, and then the state
  //                  is rewritten with that new/modified object
  const handleClick = e => {
    const updateState = () => {
      const newobj = {...state}
      Object.keys(newobj).forEach(key => {
        if (newobj[key].id === e.currentTarget.id) {
          // Open currently clicked
          newobj[key].isActive = true
        } else {
          //        Used for close button and close others. It works for close
          //        button as it has no ID, so no match
          newobj[key].isActive = false
        }
      })
      return newobj
    }
    setState(updateState())
  }

  return (
    <div className={`${classBlock}-list`}>
      <div data-grid="columns: 12, gutters-row: true">
        {Object.keys(state).map((item, i) => {
          const {id, isActive, projectData} = state[item]
          return (
            <div data-grid-item="width: 9, width-large: 4, width-large-x: 4">
              <div className={`${classBlock} ${isActive ? 'open' : 'closed'}`}>
                {
                  // Rendering each item passing isActive flag, function to
                  // update it, css base class, and projects data
                }
                <CollapsibleItem
                  isActive={isActive}
                  onChangeActive={handleClick}
                  id={id}
                  projectData={projectData}
                  classBlock={classBlock}
                />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
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
