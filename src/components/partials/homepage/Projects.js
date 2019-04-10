import React from 'react';

const HomeProjects = () => (
  <div
    id="projects"
    className="section section--lines section--muted scrollpoint"
  >
    <div className="group">
      <h2 className="h2 h2__block">
        <span>Projects</span>
      </h2>
      <div data-grid="columns: 12, gutters-row: true">
        <div data-grid-item="width: 9, width-large: 6, width-large-x: 4">
          <div className="project__item">
            <div
              className="overlay overlay--toggle"
              data-collapsible="open: false"
            >
              <img
                className="project__image"
                src="/img/placeholder--project-2.jpg"
                alt="alt"
              />
              <div
                className="overlay__content project__item"
                data-collapsible="open: false"
              >
                <h3 className="project__name">Combatting Cybercrime</h3>
                <p className="project__detail">World Bank</p>
                <p className="project__description">
                  Project completed at Informatics Studio. Front-End & Static
                  Site Generator development.
                </p>
                <a
                  href="http://www.combattingcybercrime.org"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  View
                </a>
              </div>
              <button
                type="button"
                className="overlay__toggle"
                data-collapsible="open: false"
              >
                <span>Open</span>
              </button>
            </div>
          </div>
        </div>
        <div data-grid-item="width: 9, width-large: 6, width-large-x: 4">
          <div
            className="overlay overlay--toggle"
            data-collapsible="open: false"
          >
            <img
              className="project__image"
              src="/img/placeholder--project-2.jpg"
              alt="alt"
            />
            <div className="overlay__content" data-collapsible="open: false">
              <p>Skills Used: HTML, CSS, JavaScript, Libraries, Hugo, jQuery</p>
            </div>
            <button
              type="button"
              className="overlay__toggle"
              data-collapsible="open: false"
            >
              <span>Open</span>
            </button>
          </div>
        </div>
        <div data-grid-item="width: 6, width-large: 4" />
      </div>
    </div>
  </div>
);

export default HomeProjects;
