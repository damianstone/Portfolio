import React, { useEffect } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import ReactGa from 'react-ga';
import Home from './pages/Home';
import './App.css';

// make the app much faster
const NotFound = React.lazy(() => import('./pages/404/NotFound'));

const App = () => {
  useEffect(() => {
    ReactGa.initialize('G-ZY56W7NQWC');

    //to report page view
    ReactGa.pageview('/');
  }, []);

  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default App;
