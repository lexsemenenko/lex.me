import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import PageHome from '../components/pages/pageHome';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={PageHome} exact />
        {/* <Route path="/projects" component={PageProjects} />
          <Route path="/project/:projectSlug" component={ProjectsSingle} />
          <Route component={PageNotFound} /> */}
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
