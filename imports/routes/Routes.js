import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect, withRouter } from 'react-router-dom';

import Signup from '../ui/Signup';
import Dashboard from '../ui/Dashboard';
import NotFound from '../ui/NotFound';
import Login from '../ui/Login';

const loggedIn = !!Meteor.userId();
const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" render={() => (
  loggedIn ? (
    <Redirect to="/dashboard"/>
  ) : (
    <Login/>
  )
)}/>
      <Route path="/signup" render={() => (
  loggedIn ? (
    <Redirect to="/dashboard"/>
  ) : (
    <Signup/>
  )
)}/>
      <Route path="/dashboard" render={() => (
  loggedIn ? (
    <Dashboard/>
  ) : (
    <Redirect to="/"/>
  )
)}/>
      <Route component={NotFound} location={location}/>
    </Switch>
  </Router>
);

export default Routes;
