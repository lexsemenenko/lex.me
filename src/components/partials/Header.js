import React from 'react'

import Dropdown from '../elements/Dropdown/Dropdown'
import DropdownToggle from '../elements/Dropdown/DropdownToggle'
import DropdownContent from '../elements/Dropdown/DropdownContent'
import Image from '../elements/Image'

const Header = () => (
  <div id="header" className="section header scrollpoint-header">
    <div className="group">
      <div data-grid="columns: 12">
        <div data-grid-item="width: 6">
          <div className="header__logo">
            <a href="/">
              <Image src="/images/lex-logo.svg" />
            </a>
          </div>
        </div>
        <Dropdown blockClass="menu-mobile">
          <DropdownToggle>Menu</DropdownToggle>
          <DropdownContent>Menu Content</DropdownContent>
        </Dropdown>
      </div>
    </div>
  </div>
)

export default Header
