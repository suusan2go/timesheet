import * as React from 'react';
import AppRoute from './components/AppRoute';
import MainLayout from './pages/Layout/MainLayout';
import ProjectsPage from './pages/Projects';
import Top from './pages/Top';

import { createBrowserHistory } from 'history';
import { Router, Switch } from 'react-router-dom';
import ProjectPage from './pages/Project';

const history = createBrowserHistory();

class App extends React.Component {
  public render() {
    return (
      <Router history={history}>
        <Switch>
          <AppRoute exact={true} path="/" component={Top} layout={MainLayout} />
          <AppRoute
            exact={true}
            path="/projects"
            component={ProjectsPage}
            layout={MainLayout}
          />
          <AppRoute
            exact={true}
            path="/projects/:id"
            component={ProjectPage}
            layout={MainLayout}
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
