import React, { useEffect } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import ReactGA from 'react-ga';
import Home from './pages/Home';
import './App.css';

// make the app much faster
const NotFound = React.lazy(() => import('./pages/404/NotFound'));

const TRACKING_ID = 'UA-185899523-1';
ReactGA.initialize(TRACKING_ID);

const history = createBrowserHistory();

history.listen((location) => {
  ReactGA.set({ page: location.pathname }); // Update the user's current page
  ReactGA.pageview(location.pathname); // Record a pageview for the given page
});

const App = () => {
  // Initialize google analytics page view tracking

  return (
    <Router history={history}>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default App;
