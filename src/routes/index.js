import React from 'react';
import {Router, Route, Switch } from 'react-router-dom';
import history from '../components/history/history.js';

import Login from '../views/login';
import Home from '../views/Home';
import NoMatch from '../views/404';
import App from '../App';

export default class Routers extends React.Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/login" component={Login}/>
          <Route path="/app" component={App}/>
          <Route component={NoMatch}/>
        </Switch>
      </Router>
    );
  }
}