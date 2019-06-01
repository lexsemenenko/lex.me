import React, {useEffect} from 'react'
import ReactDOM from 'react-dom'
import './css/main.less'
import AppRouter from './routers/AppRouter'
import anchorsScroll from './js/modules/module--anchorsScroll'

const Wrapper = () => {
  useEffect(() => {
    const test = anchorsScroll({
      element: 'a',
      offset: 0,
      // offsetElement: '#header',
      offsetNudge: 0,
    })
  }, [])

  return <AppRouter />
}

$(document).ready(() => {
  $('#loader').remove()
  ReactDOM.render(<Wrapper />, document.getElementById('root'))
})
