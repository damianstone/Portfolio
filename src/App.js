import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import './App.css';

// make the app much faster
const NotFound = React.lazy(() => import('./pages/404/NotFound'));

const App = () => {
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

