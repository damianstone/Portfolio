import React, { Component } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';
import NotFound from './components/404/NotFound';
import './App.css';

class App extends Component {

  render() {
    return (
      <Router>
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/blog' component={Blog} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default App;

