import React from 'react'
import CollapsibleList from '../../elements/Project/CollapsibleList'
import CollapsibleItem from '../../elements/Project/CollapsibleItem'

const HomeProjects = () => {
  const projects = {
    combattingCybercrime: {
      name: 'Combatting Cybercrime',
      company: 'World Bank',
      description:
        'Project completed at Informatics Studio. Front-End & Static Site Generator development.',
      link: 'http://www.combattingcybercrime.org',
      image: 'placeholder--project-2.jpg',
      content: 'Content here 1',
    },
    projectTwo: {
      name: 'Project Name Two',
      company: 'Company Name',
      description: 'Project Description Two',
      link: 'http://google.com',
      image: 'placeholder--project-2.jpg',
      content: 'Content here 2',
    },
    projectThree: {
      name: 'Project Name Three',
      company: 'Company Name',
      description: 'Project Description Three',
      link: 'http://google.com',
      image: 'placeholder--project-2.jpg',
      content: 'Content here 3',
    },
    projectFour: {
      name: 'Project Name Four',
      company: 'Company Name',
      description: 'Project Description Four',
      link: 'http://google.com',
      image: 'placeholder--project-2.jpg',
      content: 'Content here 4',
    },
    projectFive: {
      name: 'Project Name Five',
      company: 'Company Name',
      description: 'Project Description Five',
      link: 'http://google.com',
      image: 'placeholder--project-2.jpg',
      content: 'Content here 5',
    },
    projectSix: {
      name: 'Project Name Six',
      company: 'Company Name',
      description: 'Project Description Six',
      link: 'http://google.com',
      image: 'placeholder--project-2.jpg',
      content: 'Content here 6',
    },
  }

  return (
    <div className="group">
      <h2 className="h2 h2__block">
        <span>Projects</span>
      </h2>
      {
        // - Gives us children
        // - CSS class for the whole component
        // - Click Functionality Component is done here as we have access to the children.
        // - Passing each child an id, so we know which one is clicked
        // - Passing correct data for each collapsible item. This is should be separate from click state object
      }
      <CollapsibleList classBlock="project">
        {Object.keys(projects).map((key, i) => {
          // - I got data from this component in the parent through children props
          // - I can add props here or inside CollapsibleList component file
          //   when rendering OR PropTypes of CollapsibleItem file
          // - As of now, I'm merging projectsData with the state object. Good/No?
          return <CollapsibleItem id={key} projectData={projects[key]} />
        })}
      </CollapsibleList>
    </div>
  )
}

export default HomeProjects
