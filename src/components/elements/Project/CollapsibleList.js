import React, {useState, useEffect} from 'react'
import CollapsibleItem from './CollapsibleItem'

const CollapsibleList = props => {
  const {children, classBlock} = props
  const generateState = array =>
    array.reduce((obj, item) => {
      obj[item.props.id] = item.props
      return obj
    }, {})

  // - Creating State object from children array
  const [state, setState] = useState(generateState(children))

  const handleClick = e => {
    e.preventDefault()
    const updateState = () => {
      const newobj = {...state}
      Object.keys(newobj).map(key => {
        if (newobj[key].id === e.currentTarget.id) {
          newobj[key].isActive = true
        } else {
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

export default CollapsibleList
