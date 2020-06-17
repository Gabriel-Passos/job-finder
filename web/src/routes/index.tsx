import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import User from '../pages/User';
import Cards from '../pages/Cards';
import RegisterUser from '../pages/RegisterUser';
import Dashboard from '../pages/Dashboard';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/user" exact component={User} />
      <Route path="/cards" exact component={Cards} />
      <Route path="/register" exact component={RegisterUser} />
      <Route path="/dashboard" exact component={Dashboard} />
    </Switch>
  );
};

export default Routes;
