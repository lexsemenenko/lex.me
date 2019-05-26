import React, {useState} from 'react'
import Image from '../../elements/Image'
import CollapsibleList from '../../elements/Collapsible/CollapsibleList'
import CollapsibleToggle from '../../elements/Collapsible/CollapsibleToggle'
import CollapsibleContent from '../../elements/Collapsible/CollapsibleContent'
// import projects from '../../../data/projects'
// import Dropdown from '../Dropdown';

const HomeProjects = () => {
  const projects = {
    combattingCybercrime: {
      name: 'Combatting Cybercrime',
      company: 'World Bank',
      description: 'Project completed at Informatics Studio. Front-End & Static Site Generator development.',
      link: 'http://www.combattingcybercrime.org',
      open: false,
    },
    projectTwo: {
      name: 'Project Name Two',
      detail: 'Project Detail Two',
      description: 'Project Description Two',
      link: 'http://google.com',
      open: false,
    },
    projectThree: {
      name: 'Project Name Three',
      detail: 'Project Detail Three',
      description: 'Project Description Three',
      link: 'http://google.com',
      open: false,
    },
    projectFour: {
      name: 'Project Name Four',
      detail: 'Project Detail Four',
      description: 'Project Description Four',
      link: 'http://google.com',
      open: false,
    },
    projectFive: {
      name: 'Project Name Five',
      detail: 'Project Detail Five',
      description: 'Project Description Five',
      link: 'http://google.com',
      open: false,
    },
  }

  const [projectsStateful, projectToggle] = useState(projects)
  return (
    <div id="projects" className="section section--lines section--muted scrollpoint">
      <div className="group">
        <h2 className="h2 h2__block">
          <span>Projects</span>
        </h2>
        <div data-grid="columns: 12, gutters-row: true">
          <CollapsibleList>
            <CollapsibleToggle id="project-1">One Toggle</CollapsibleToggle>
            <CollapsibleToggle id="project-2">Two Toggle</CollapsibleToggle>
            <CollapsibleToggle id="project-3">Three Toggle</CollapsibleToggle>
          </CollapsibleList>
        </div>
        <div data-grid="columns: 12, gutters-row: true">
          {Object.keys(projectsStateful).map(key => {
            const {name, company, description, link, open} = projectsStateful[key]
            const openProject = () => {
              projects[key].open = true
              projectToggle(projects)
            }
            const closeProject = () => projectToggle(projects)

            return (
              <div data-grid-item="width: 9, width-large: 4, width-large-x: 4">
                <div className="project__item">
                  <div className="overlay overlay--toggle">
                    <Image alt={`${name} ${company}`} />

                    <div className="overlay__content project__item" data-collapsible={`open: ${open}`}>
                      <h3 className="project__name">{name}</h3>
                      <p className="project__detail">{company}</p>
                      <p className="project__description">{description}</p>
                      <a href="{link}" target="_blank">
                        View
                      </a>
                      <button onClick={closeProject} type="button" className="overlay__close">
                        <span>Close</span>
                      </button>
                    </div>
                    <button
                      onClick={openProject}
                      type="button"
                      className="overlay__toggle"
                      data-collapsible="open: false"
                    >
                      <span>Open</span>
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default HomeProjects
