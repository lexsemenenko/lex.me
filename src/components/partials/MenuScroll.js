import React, {useEffect, useState, useContext} from 'react'
import contextUi from '../context/contextUi'
import anchorsScroll from '../../js/modules/module--anchorsScroll'

const MenuScroll = ({className}) => {
  console.log(className)
  
  const {stateSpSections} = useContext(contextUi)

  // Smooth scroll for the menu links
  useEffect(() => {
    anchorsScroll({
      element: `.${className} a`,
      offset: 0,
      // offsetElement: '#header',
      offsetNudge: 0,
    })
  })
  
  return (
    <ul className={className}>
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
  )
}

export default MenuScroll
