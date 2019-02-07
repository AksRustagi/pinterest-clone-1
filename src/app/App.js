import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { app } from '../components/FireBase/Base.js';
import * as ROUTES from '../constants/Routes';
import Landing from '../components/LandingPage/Landing.js';
import SignUp from '../components/SignUp/SignUp.js';
import Logout from '../components/Logout/Logout.js';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.setCurrentUser = this.setCurrentUser.bind(this);


    this.state = {
      authenticated: false,
      currentUser: null,
      loading: true,
    }
  }

  setCurrentUser(user) {
    if (user) {
      this.setState({
        currentUser: user,
        authenticated: true
      })
    } else {
      this.setState({
        currentUser: null,
        authenticated: false
      })
    }
  }

  componentWillMount() {
    this.removeAuthListener = app.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          authenticated: true,
          currentUser: user,
          loading: false,
        })
      } else {
        this.setState({
          authenticated: false,
          currentUser: null,
          loading: false,
        })
      }
    })
  }

  componentWillUnmount() {
    this.removeAuthListener();
  }

  render() {
    if (this.state.loading === true) {
      return (
        <div className='loader'>
          <h3>Loading...</h3>
        </div>
      )
    }
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path={ROUTES.LANDING} exact component={Landing} />
            <Route path={ROUTES.SIGN_UP} exact component={SignUp} />
            <Route path={ROUTES.LOG_OUT} exact component={Logout} />
            <Route path={'/'} render={() => <Redirect to={ROUTES.LANDING} />} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
