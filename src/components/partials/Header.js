import React from 'react'
import Dropdown from '../elements/Dropdown/Dropdown'
import DropdownToggle from '../elements/Dropdown/DropdownToggle'
import DropdownContent from '../elements/Dropdown/DropdownContent'
import Image from '../elements/Image'
import MenuScroll from './MenuScroll'

const Header = () => (
  <div id="header" className="section header scrollpoint-header">
    <div className="group">
      <div className="header__logo">
        <a href="/">
          <Image src="/images/lex-logo.svg" />
        </a>
      </div>
      <Dropdown blockClass="menu-mobile">
        <DropdownToggle>
          <span className="menu-mobile__icon">
            <span />
            <span />
            <span />
          </span>
        </DropdownToggle>
        <DropdownContent>
          <MenuScroll className="menu-scroll-mobile" />
        </DropdownContent>
      </Dropdown>
    </div>
  </div>
)

export default Header
