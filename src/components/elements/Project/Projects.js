import React, {useContext} from 'react'
// import {id} from 'postcss-selector-parser'
import {contextProjects} from '../../store/StoreProjects'
import {contextGlobalUi} from '../../store/StoreGlobalUi'
import Image from '../Image'

const Projects = () => {
  const [state, dispatch] = useContext(contextProjects)
  const [stateGlUi, dispatchGlUi] = useContext(contextGlobalUi)

  const onToggleOpen = e => {
    e.preventDefault()
    const newArr = state.map(item => {
      // Open Current
      if (item.id === e.currentTarget.id) {
        const part = {isActive: true}
        return {...item, ...part}
      }
      // Close Rest
      const part = {isActive: false}
      return {...item, ...part}
    })
    dispatch({type: 'OPEN_PROJECT', newState: newArr})
    dispatchGlUi({
      type: 'TOGGLE_MODAL',
      newState: {...stateGlUi, ...{modalOpen: true}},
    })
  }
  const onToggleCloseAll = e => {
    const newArr = state.map(item => {
      // Close All
      const part = {isActive: false}
      return {...item, ...part}
    })
    dispatch({type: 'CLOSE_ALL_PROJECTS', newState: newArr})
    dispatchGlUi({
      type: 'TOGGLE_MODAL',
      newState: {...stateGlUi, ...{modalOpen: false}},
    })
  }

  return (
    <div data-grid="columns: 12, gutters-row: true">
      {state.map(project => {
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
        return (
          <div data-grid-item="width: 9, width-large: 4, width-large-x: 4">
            <div className={`project ${isActive ? 'open' : 'closed'}`}>
              <button
                type="button"
                className={`project__toggle ${isActive ? 'open' : 'closed'}`}
                style={styleToggle}
                id={id}
                onClick={e => {
                  onToggleOpen(e)
                }}
              >
                <span>{name}</span>
              </button>

              <div className={`lx-modal ${isActive ? 'open' : 'closed'}`}>
                <div
                  className={`lx-modal__panel ${isActive ? 'open' : 'closed'}`}
                >
                  <div
                    className={`project__content ${
                      isActive ? 'open' : 'closed'
                    }`}
                  >
                    <div className="scroll-projects">
                      <div className="scroll-projects__header">
                        <h3>{name}</h3>
                        <p>{company}</p>

                        <button
                          className="project__close"
                          type="button"
                          onClick={e => {
                            onToggleCloseAll(e)
                          }}
                        >
                          Close
                        </button>
                      </div>
                      <div className="scroll-projects__body">
                        <p>
                          Pellentesque habitant morbi tristique senectus et
                          netus et malesuada fames ac turpis egestas. Vestibulum
                          tortor quam, feugiat vitae, ultricies eget, tempor sit
                          amet, ante. Donec eu libero sit amet quam egestas
                          semper. Aenean ultricies mi vitae est. Mauris placerat
                          eleifend leo. Quisque sit amet est et sapien
                          ullamcorper pharetra. Vestibulum erat wisi,
                          condimentum sed, commodo vitae, ornare sit amet, wisi.
                          Aenean fermentum, elit eget tincidunt condimentum,
                          eros ipsum rutrum orci, sagittis tempus lacus enim ac
                          dui. Donec non enim in turpis pulvinar facilisis. Ut
                          felis. Praesent dapibus, neque id cursus faucibus,
                          tortor neque egestas augue, eu vulputate magna eros eu
                          erat. Aliquam erat volutpat. Nam dui mi, tincidunt
                          quis, accumsan porttitor, facilisis luctus, metus
                        </p>
                        <p>
                          Pellentesque habitant morbi tristique senectus et
                          netus et malesuada fames ac turpis egestas. Vestibulum
                          tortor quam, feugiat vitae, ultricies eget, tempor sit
                          amet, ante. Donec eu libero sit amet quam egestas
                          semper. Aenean ultricies mi vitae est. Mauris placerat
                          eleifend leo. Quisque sit amet est et sapien
                          ullamcorper pharetra. Vestibulum erat wisi,
                          condimentum sed, commodo vitae, ornare sit amet, wisi.
                          Aenean fermentum, elit eget tincidunt condimentum,
                          eros ipsum rutrum orci, sagittis tempus lacus enim ac
                          dui. Donec non enim in turpis pulvinar facilisis. Ut
                          felis. Praesent dapibus, neque id cursus faucibus,
                          tortor neque egestas augue, eu vulputate magna eros eu
                          erat. Aliquam erat volutpat. Nam dui mi, tincidunt
                          quis, accumsan porttitor, facilisis luctus, metus
                        </p>
                        <p>
                          Pellentesque habitant morbi tristique senectus et
                          netus et malesuada fames ac turpis egestas. Vestibulum
                          tortor quam, feugiat vitae, ultricies eget, tempor sit
                          amet, ante. Donec eu libero sit amet quam egestas
                          semper. Aenean ultricies mi vitae est. Mauris placerat
                          eleifend leo. Quisque sit amet est et sapien
                          ullamcorper pharetra. Vestibulum erat wisi,
                          condimentum sed, commodo vitae, ornare sit amet, wisi.
                          Aenean fermentum, elit eget tincidunt condimentum,
                          eros ipsum rutrum orci, sagittis tempus lacus enim ac
                          dui. Donec non enim in turpis pulvinar facilisis. Ut
                          felis. Praesent dapibus, neque id cursus faucibus,
                          tortor neque egestas augue, eu vulputate magna eros eu
                          erat. Aliquam erat volutpat. Nam dui mi, tincidunt
                          quis, accumsan porttitor, facilisis luctus, metus
                        </p>
                        <p>
                          Pellentesque habitant morbi tristique senectus et
                          netus et malesuada fames ac turpis egestas. Vestibulum
                          tortor quam, feugiat vitae, ultricies eget, tempor sit
                          amet, ante. Donec eu libero sit amet quam egestas
                          semper. Aenean ultricies mi vitae est. Mauris placerat
                          eleifend leo. Quisque sit amet est et sapien
                          ullamcorper pharetra. Vestibulum erat wisi,
                          condimentum sed, commodo vitae, ornare sit amet, wisi.
                          Aenean fermentum, elit eget tincidunt condimentum,
                          eros ipsum rutrum orci, sagittis tempus lacus enim ac
                          dui. Donec non enim in turpis pulvinar facilisis. Ut
                          felis. Praesent dapibus, neque id cursus faucibus,
                          tortor neque egestas augue, eu vulputate magna eros eu
                          erat. Aliquam erat volutpat. Nam dui mi, tincidunt
                          quis, accumsan porttitor, facilisis luctus, metus
                        </p>
                        <p>
                          Pellentesque habitant morbi tristique senectus et
                          netus et malesuada fames ac turpis egestas. Vestibulum
                          tortor quam, feugiat vitae, ultricies eget, tempor sit
                          amet, ante. Donec eu libero sit amet quam egestas
                          semper. Aenean ultricies mi vitae est. Mauris placerat
                          eleifend leo. Quisque sit amet est et sapien
                          ullamcorper pharetra. Vestibulum erat wisi,
                          condimentum sed, commodo vitae, ornare sit amet, wisi.
                          Aenean fermentum, elit eget tincidunt condimentum,
                          eros ipsum rutrum orci, sagittis tempus lacus enim ac
                          dui. Donec non enim in turpis pulvinar facilisis. Ut
                          felis. Praesent dapibus, neque id cursus faucibus,
                          tortor neque egestas augue, eu vulputate magna eros eu
                          erat. Aliquam erat volutpat. Nam dui mi, tincidunt
                          quis, accumsan porttitor, facilisis luctus, metus
                        </p>
                        <p>
                          Pellentesque habitant morbi tristique senectus et
                          netus et malesuada fames ac turpis egestas. Vestibulum
                          tortor quam, feugiat vitae, ultricies eget, tempor sit
                          amet, ante. Donec eu libero sit amet quam egestas
                          semper. Aenean ultricies mi vitae est. Mauris placerat
                          eleifend leo. Quisque sit amet est et sapien
                          ullamcorper pharetra. Vestibulum erat wisi,
                          condimentum sed, commodo vitae, ornare sit amet, wisi.
                          Aenean fermentum, elit eget tincidunt condimentum,
                          eros ipsum rutrum orci, sagittis tempus lacus enim ac
                          dui. Donec non enim in turpis pulvinar facilisis. Ut
                          felis. Praesent dapibus, neque id cursus faucibus,
                          tortor neque egestas augue, eu vulputate magna eros eu
                          erat. Aliquam erat volutpat. Nam dui mi, tincidunt
                          quis, accumsan porttitor, facilisis luctus, metus
                        </p>
                        <p>
                          Pellentesque habitant morbi tristique senectus et
                          netus et malesuada fames ac turpis egestas. Vestibulum
                          tortor quam, feugiat vitae, ultricies eget, tempor sit
                          amet, ante. Donec eu libero sit amet quam egestas
                          semper. Aenean ultricies mi vitae est. Mauris placerat
                          eleifend leo. Quisque sit amet est et sapien
                          ullamcorper pharetra. Vestibulum erat wisi,
                          condimentum sed, commodo vitae, ornare sit amet, wisi.
                          Aenean fermentum, elit eget tincidunt condimentum,
                          eros ipsum rutrum orci, sagittis tempus lacus enim ac
                          dui. Donec non enim in turpis pulvinar facilisis. Ut
                          felis. Praesent dapibus, neque id cursus faucibus,
                          tortor neque egestas augue, eu vulputate magna eros eu
                          erat. Aliquam erat volutpat. Nam dui mi, tincidunt
                          quis, accumsan porttitor, facilisis luctus, metus
                        </p>
                        <p>
                          Pellentesque habitant morbi tristique senectus et
                          netus et malesuada fames ac turpis egestas. Vestibulum
                          tortor quam, feugiat vitae, ultricies eget, tempor sit
                          amet, ante. Donec eu libero sit amet quam egestas
                          semper. Aenean ultricies mi vitae est. Mauris placerat
                          eleifend leo. Quisque sit amet est et sapien
                          ullamcorper pharetra. Vestibulum erat wisi,
                          condimentum sed, commodo vitae, ornare sit amet, wisi.
                          Aenean fermentum, elit eget tincidunt condimentum,
                          eros ipsum rutrum orci, sagittis tempus lacus enim ac
                          dui. Donec non enim in turpis pulvinar facilisis. Ut
                          felis. Praesent dapibus, neque id cursus faucibus,
                          tortor neque egestas augue, eu vulputate magna eros eu
                          erat. Aliquam erat volutpat. Nam dui mi, tincidunt
                          quis, accumsan porttitor, facilisis luctus, metus
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Projects
