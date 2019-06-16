import React, {useEffect, useReducer} from 'react'
import reducerUi from '../redicers/reducerUi'
import HomeHero from './pageHome/HomeHero'
import HomeAbout from './pageHome/HomeAbout'
import HomeProjects from './pageHome/HomeProjects'
import HomeContact from './pageHome/HomeContact'
import sp from '../../js/modules/moudle--scrollpoints'
import contextUi from '../context/contextUi'

const pageHome = () => {
  // # Using Reducer
  const [stateSpSections, dispatchUi] = useReducer(reducerUi, [])

  const getSp = () => {
    const spInstance = sp({
      scrollpoint: '.scrollpoint',
      offset: 0,
      elementOffset: 'header', // Only by ID for now
      direction: 'both',
      debug: false,
    })

    window.addEventListener('scroll', () => {
      dispatchUi({
        type: 'GET_SCROLLPOINTS_SECTIONS',
        getScrollPontsSections: spInstance.get(),
      })
    })
  }

  useEffect(() => {
    getSp()
  }, [])

  return (
    // We are providing context values to any children who wants to cosume it
    <contextUi.Provider value={{stateSpSections, dispatchUi}}>
      <div
        id="intro"
        className={`section section--hero scrollpoint ${
          stateSpSections.length && stateSpSections[0].isActive
            ? ' active'
            : ' not-active'
        }`}
      >
        <HomeHero />
      </div>
      <div
        id="about"
        className={`section section--lines scrollpoint ${
          stateSpSections.length && stateSpSections[1].isActive
            ? ' active'
            : ' not-active'
        }`}
      >
        <HomeAbout />
      </div>
      <div
        id="projects"
        className={`section section--lines section--muted scrollpoint ${
          stateSpSections.length && stateSpSections[2].isActive
            ? ' active'
            : ' not-active'
        }`}
      >
        <HomeProjects />
      </div>
      <div
        id="contact"
        className={`section section--lines-dark  scrollpoint ${
          stateSpSections.length && stateSpSections[3].isActive
            ? ' active'
            : ' not-active'
        }`}
      >
        <HomeContact />
      </div>
    </contextUi.Provider>
  )
}

export default pageHome
