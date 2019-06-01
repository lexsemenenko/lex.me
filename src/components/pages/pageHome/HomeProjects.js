import React from 'react'
import CollapsibleList from '../../elements/Project/CollapsibleList'
import CollapsibleItem from '../../elements/Project/CollapsibleItem'
import projectsData from '../../../data/projectsData.json'

const HomeProjects = () => {
  return (
    <div className="group">
      <h2 className="h2 h2__block">
        <span>Projects</span>
      </h2>
      <CollapsibleList classBlock="projects">
        {Object.keys(projectsData).map((key, i) => {
          return <CollapsibleItem id={key} />
        })}
      </CollapsibleList>
    </div>
  )
}

export default HomeProjects
