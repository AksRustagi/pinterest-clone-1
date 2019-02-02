import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as ROUTES from '../constants/Routes';
import Landing from '../components/LandingPage/Landing.js';
import Login from '../components/Login/Login.js';
import SignUp from '../components/SignUp/SignUp.js';
import Home from '../components/Home/Home.js';
import './App.css';

var firebase = require('firebase');
var firebaseui = require('firebaseui');

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path={ROUTES.LANDING} exact component={Landing} />
            <Route path={ROUTES.LOG_IN} exact component={Login} />
            <Route path={ROUTES.SIGN_UP} exact component={SignUp} />
            <Route path={ROUTES.HOME} exact component={Home} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
