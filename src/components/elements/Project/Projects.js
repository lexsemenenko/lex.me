import React, {useContext} from 'react'
import {contextProjects} from '../../store/StoreProjects'

const Projects = () => {
  const [state, dispatch] = useContext(contextProjects)
  return (
    <div>
      <div>Projects Yay</div>
      <div>Projects Yay</div>
    </div>
  )
}

export default Projects
