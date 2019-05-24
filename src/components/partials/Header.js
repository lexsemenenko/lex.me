import React from 'react'

const Header = () => (
  <div id="header" className="section header scrollpoint-header">
    <div className="group">
      <div className="menu-mobile" data-collapsible="open: false">
        <button type="button" className="menu-mobile__toggle" data-collapsible="open: false">
          <span className="hide-v">Menu</span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            data-svg="navbar-toggle-icon"
          >
            <rect y="9" width="20" height="2" />
            <rect y="3" width="20" height="2" />
            <rect y="15" width="20" height="2" />
          </svg>
        </button>
        <div className="menu-mobile__content" data-collapsible="open: false">
          Resume Link
        </div>
      </div>
      <div data-grid="columns: 12">
        <div data-grid-item="width: 6">
          <div className="header__logo">
            <a href="/">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="39 151 423 198" aria-hidden="true">
                <path
                  d="M39 151h60v146h74V151h162l26 42 28-42h67l-60 96 66 102h-72l-31-48-29 48H39zm195 146h59l32-49-28-45h-64l33 45z"
                  paintOrder="stroke"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Header
