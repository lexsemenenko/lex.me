import React, {useContext} from 'react'
import {id} from 'postcss-selector-parser'
import {contextProjects} from '../../store/StoreProjects'
import Image from '../Image'

const Projects = () => {
  const [state, dispatch] = useContext(contextProjects)

  const onToggleOpen = e => {
    e.preventDefault()
    const newArr = state.map(item => {
      // Open Current
      if (item.id === e.currentTarget.id) {
        const part = {isActive: true}
        return {...item, ...part}
      }
      // Close Rest
      const part = {isActive: false}
      return {...item, ...part}
    })
    dispatch({type: 'OPEN_PROJECT', newState: newArr})
  }
  const onToggleCloseAll = e => {
    const newArr = state.map(item => {
      // Close All
      const part = {isActive: false}
      return {...item, ...part}
    })
    dispatch({type: 'CLOSE_ALL_PROJECTS', newState: newArr})
  }

  return (
    <div data-grid="columns: 12, gutters-row: true">
      {state.map(project => {
        const {
          company,
          content,
          description,
          id,
          image,
          isActive,
          link,
          name,
        } = project

        const styleToggle = {
          backgroundImage: `url(images/${image})`,
        }
        return (
          <div data-grid-item="width: 9, width-large: 4, width-large-x: 4">
            <div className={`project ${isActive ? 'open' : 'closed'}`}>
              <button
                type="button"
                className={`project__toggle ${isActive ? 'open' : 'closed'}`}
                style={styleToggle}
                id={id}
                onClick={e => {
                  console.log(e.currentTarget)
                  onToggleOpen(e)
                }}
              >
                <span>{name}</span>
              </button>

              <div
                className={`project__content ${isActive ? 'open' : 'closed'}`}
              >
                <div>{company}</div>
                <button
                  type="button"
                  onClick={e => {
                    onToggleCloseAll(e)
                  }}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Projects
