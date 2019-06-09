import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Header from '../components/partials/Header'
import Footer from '../components/partials/Footer'

import PageHome from '../components/pages/pageHome'
import StoreGlobalUi from '../components/store/StoreGlobalUi'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <StoreGlobalUi>
        <Header />
        <Switch>
          <Route path="/" component={PageHome} exact />
          {/* <Route path="/projects" component={PageProjects} />
          <Route path="/project/:projectSlug" component={ProjectsSingle} />
          <Route component={PageNotFound} /> */}
        </Switch>
        <Footer />
      </StoreGlobalUi>
    </BrowserRouter>
  )
}

export default AppRouter
