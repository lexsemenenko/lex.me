import React, {useContext} from 'react'
import {id} from 'postcss-selector-parser'
import {contextProjects} from '../../store/StoreProjects'

const Projects = () => {
  const [state, dispatch] = useContext(contextProjects)

  const toggleOpen = () => {
    console.log('clicked')
  }

  return (
    <div>
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
        return (
          <>
            <div>{name}</div>
            <button type="button" onClick={toggleOpen}>
              Open
            </button>
          </>
        )
      })}
    </div>
  )
}

export default Projects
