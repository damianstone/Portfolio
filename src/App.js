import React, { Component } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import './App.css';

class App extends Component {

  render() {
    return (
      <Router>
        <Switch>
          <Route path='/' component={Home} exact />
        </Switch>
      </Router>
    );
  }
}

export default App;

