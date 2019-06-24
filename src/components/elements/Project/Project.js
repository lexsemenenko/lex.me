import React from 'react'

const Project = ({project, open, closeAll}) => {
  const {
    company,
    content,
    description,
    id,
    image,
    isActive,
    link,
    name,
  } = project

  const styleToggle = {
    backgroundImage: `url(images/${image})`,
  }
  const toggleClasses = isActive ? 'open' : 'closed'

  return (
    <div data-grid-item="width: 9, width-large: 4, width-large-x: 4">
      <div className={`project ${toggleClasses}`}>
        <button
          type="button"
          className={`project__toggle ${toggleClasses}`}
          style={styleToggle}
          id={id}
          onClick={e => {
            open(e)
          }}
        >
          <span className="project__toggle-text">
            <span>{company}</span>
            <span>{name}</span>
          </span>
          <span className="project__icon">Open</span>
        </button>

        <div className={`lx-modal ${toggleClasses}`}>
          <div className={`lx-modal__panel ${toggleClasses}`}>
            <div className={`project__content ${isActive ? 'open' : 'closed'}`}>
              <div className="scroll-projects">
                <div className="scroll-projects__header">
                  <h3>{name}</h3>
                  <p>{company}</p>

                  <button
                    className="project__close"
                    type="button"
                    onClick={e => {
                      closeAll(e)
                    }}
                  >
                    Close
                  </button>
                </div>
                <div className="scroll-projects__body">
                  <p>
                    Pellentesque habitant morbi tristique senectus et netus et
                    malesuada fames ac turpis egestas. Vestibulum tortor quam,
                    feugiat vitae, ultricies eget, tempor sit amet, ante. Donec
                    eu libero sit amet quam egestas semper. Aenean ultricies mi
                    vitae est. Mauris placerat eleifend leo. Quisque sit amet
                    est et sapien ullamcorper pharetra. Vestibulum erat wisi,
                    condimentum sed, commodo vitae, ornare sit amet, wisi.
                    Aenean fermentum, elit eget tincidunt condimentum, eros
                    ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec
                    non enim in turpis pulvinar facilisis. Ut felis. Praesent
                    dapibus, neque id cursus faucibus, tortor neque egestas
                    augue, eu vulputate magna eros eu erat. Aliquam erat
                    volutpat. Nam dui mi, tincidunt quis, accumsan porttitor,
                    facilisis luctus, metus
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project