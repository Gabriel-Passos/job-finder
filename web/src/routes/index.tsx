import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Company from '../pages/Company';
import Cards from '../pages/Cards';
import RegisterCompany from '../pages/RegisterCompany';
import Dashboard from '../pages/Dashboard';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/company" component={Company} />
      <Route path="/cards" component={Cards} />
      <Route path="/register" component={RegisterCompany} />
      <Route path="/dashboard" component={Dashboard} />
    </Switch>
  );
};

export default Routes;
