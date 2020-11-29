import React, { Component } from 'react';
import Header from './components/Header/Header';
import Who from './components/Who/Who';
import Diplomas from './components/Diplomas/Diplomas';
import Footer from './components/Footer/Footer';
import classes from './App.module.css';

class App extends Component {

  render() {
    return (
      <div className={classes.App}>
        <Header />
        <Who />
        <Diplomas/>
        <Footer />
      </div>
    );
  }
}

export default App;

