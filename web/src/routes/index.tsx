import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';
import JobDetails from '../pages/JobDetails';
import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';
import Company from '../pages/Company';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/job-details/:id" component={JobDetails} />
      <Route path="/signup" component={SignUp} />
      <Route path="/signin" component={SignIn} />
      <Route path="/company" component={Company} />
    </Switch>
  );
};

export default Routes;
