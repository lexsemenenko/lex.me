import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from '../components/partials/Header';
import Footer from '../components/partials/Footer';

import PageHome from '../pages/Home';
import ProjectsSingle from '../pages/ProjectsSingle';
import PageProjects from '../pages/Projects';
import PageNotFound from '../pages/NotFound';

const AppRouter = ({ stateUi }) => {
  const { homepageSectionActive } = stateUi.scrollpoint;
  console.log(homepageSectionActive);
  return (
    <BrowserRouter>
      <div className={`scrollpoint-section-active--${homepageSectionActive}`}>
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
};

// export default AppRouter;
const mapStateToProps = state => {
  return {
    stateUi: state.ui
  };
};

export default connect(mapStateToProps)(AppRouter);
