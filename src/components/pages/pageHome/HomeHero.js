import React, {useEffect, useState, useContext} from 'react'
import scrollpoints from '../../../js/modules/moudle--scrollpoints'
// import reducerUi from '../../redicers/reducerUi';
import contextUi from '../../context/contextUi'
import anchorsScroll from '../../../js/modules/module--anchorsScroll'
import Image from '../../elements/Image'

const HomeHero = () => {
  const {stateSpSections} = useContext(contextUi)

  const [stateMenuSticky, toggleMenuSticky] = useState([
    {
      isActive: false,
      name: undefined,
    },
  ])

  const getMenuScrollpoint = () => {
    const scrollpointsMenuInstance = scrollpoints({
      scrollpoint: '.scrollpoint--menu',
      offset: 0,
      direction: 'down',
    })

    const header = document.getElementById('header')

    window.addEventListener('scroll', () => {
      toggleMenuSticky(scrollpointsMenuInstance.get())
      scrollpointsMenuInstance.get()[0].isActive
        ? header.classList.add('active')
        : header.classList.remove('active')
    })
  }

  // Component Did Mount
  useEffect(() => {
    getMenuScrollpoint()
  }, [])

  // Smooth scroll for the menu links
  useEffect(() => {
    anchorsScroll({
      element: '.menu-scroll a',
      offset: 0,
      // offsetElement: '#header',
      offsetNudge: 0,
    })
  })

  return (
    <div className="group">
      <div className="hero">
        <div className="hero__text">
          <h1 className="h1 t-bold">Front-End & Web Developer</h1>
          <strong className="h2 t-normal">Lex Semenenko</strong>
          <a className="hero__arrow" href="#about">
            <svg
              width="30"
              height="30"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              data-svg="arrow-down"
            >
              <polygon points="10.5,16.08 5.63,10.66 6.37,10 10.5,14.58 14.63,10 15.37,10.66" />
              <line
                fill="none"
                stroke="#FA6400"
                x1="10.5"
                y1="4"
                x2="10.5"
                y2="15"
              />
            </svg>
          </a>
        </div>
        <div className="hero__menu">
          <div
            id="menu"
            className={`scrollpoint--menu ${stateMenuSticky[0].isActive &&
              'active'}`}
          >
            <ul className="menu-scroll">
              {stateSpSections.map(({id, isActive}) => {
                let title
                id === 'intro' && (title = 'Intro')
                id === 'about' && (title = 'About')
                id === 'projects' && (title = 'Projects')
                id === 'contact' && (title = 'Contact')
                return (
                  <li>
                    <a href={`/#${id}`} className={isActive && 'active'}>
                      {title}
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeHero
