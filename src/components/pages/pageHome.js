import React, {useEffect, useReducer} from 'react'
import reducerUi from '../redicers/reducerUi'
import HomeHero from './pageHome/HomeHero'
import HomeAbout from './pageHome/HomeAbout'
import HomeProjects from './pageHome/HomeProjects'
import HomeContact from './pageHome/HomeContact'
import sp from '../../js/modules/moudle--scrollpoints'
import contextUi from '../context/contextUi'
import Header from '../../components/partials/Header'
import Footer from '../../components/partials/Footer'

const pageHome = () => {
  // # Using Reducer
  const [stateSpSections, dispatchUi] = useReducer(reducerUi, [])

  const pageSections = [
    {id: 'intro', title: 'Intro', classes: 'section--hero'},
    {id: 'about', title: 'About', classes: 'section--lines'},
    {
      id: 'projects',
      title: 'Projects',
      classes: 'section--lines section--muted',
    },
    {id: 'contact', title: 'Contact', classes: 'section--lines-dark'},
  ]

  const getSp = () => {
    const spInstance = sp({
      scrollpoint: '.scrollpoint',
      offset: 0,
      elementOffset: 'header', // by ID for now
      direction: 'both',
      debug: false,
    })

    dispatchUi({
      type: 'GET_SCROLLPOINTS_SECTIONS',
      getScrollPontsSections: spInstance.get(),
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
    <contextUi.Provider value={{stateSpSections, dispatchUi}}>
      <Header />
      {pageSections.map(({id, title, classes}, i) => {
        const spActiveClass =
          stateSpSections.length && stateSpSections[i].isActive && ' active'
        return (
          <div
            id={id}
            className={`section ${classes} ${spActiveClass} scrollpoint`}
          >
            {id === 'intro' && <HomeHero />}
            {id === 'about' && <HomeAbout />}
            {id === 'projects' && <HomeProjects />}
            {id === 'contact' && <HomeContact />}
          </div>
        )
      })}
      <Footer />
    </contextUi.Provider>
  )
}

export default pageHome
