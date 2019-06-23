import React, {useContext} from 'react'
import {contextProjects} from './StoreProjects'
import Project from './Project'

const Projects = () => {
  const [state, dispatch] = useContext(contextProjects)

  const open = e => {
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
    document.body.classList.add('project__body-scroll')
  }

  const closeAll = e => {
    const newArr = state.map(item => {
      // Close All
      const part = {isActive: false}
      return {...item, ...part}
    })
    dispatch({type: 'CLOSE_ALL_PROJECTS', newState: newArr})
    document.body.classList.remove('project__body-scroll')
  }

  return (
    <div data-grid="columns: 12, gutters-row: true">
      {state.map(project => {
        return <Project project={project} open={open} closeAll={closeAll} />
      })}
    </div>
  )
}

export default Projects
