import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Dashboard, Login, SignUp, Product } from './Screens';

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/signup" component={SignUp} />
      <Route path="/" component={Dashboard}>
        <Route path="/product" component={Product} />
      </Route>
    </Switch>
  </Router>
);

export default Routes;
