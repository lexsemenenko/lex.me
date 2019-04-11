import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/partials/Header';
import Footer from '../components/partials/Footer';

import PageHome from '../pages/Home';
import ProjectsSingle from '../pages/ProjectsSingle';
import PageProjects from '../pages/Projects';
import PageNotFound from '../pages/NotFound';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={PageHome} exact />
        <Route path="/projects" component={PageProjects} />
        <Route path="/project/:projectSlug" component={ProjectsSingle} />
        <Route component={PageNotFound} />
      </Switch>
      <Footer />
    </div>
  </BrowserRouter>
);

export default AppRouter;
