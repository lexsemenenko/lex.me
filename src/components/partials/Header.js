import React from 'react';
import Dropdown from '../elements/Dropdown/Dropdown';
import DropdownToggle from '../elements/Dropdown/DropdownToggle';
import DropdownContent from '../elements/Dropdown/DropdownContent';
import Image from '../elements/Image';
import MenuScroll from './MenuScroll';

const Header = () => (
  <header id="header" className="section header scrollpoint-header">
    <div className="header__logo">
      <a href="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="39 151 423 198"
          aria-hidden="true"
        >
          <path
            fill="currentColor"
            d="M39 151h60v146h74V151h162l26 42 28-42h67l-60 96 66 102h-72l-31-48-29 48H39zm195 146h59l32-49-28-45h-64l33 45z"
            paintOrder="stroke"
          />
        </svg>
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
  </header>
);

export default Header;
