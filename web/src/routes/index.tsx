import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Landing from '../pages/Landing';
import Dashboard from '../pages/Dashboard';
import JobDetails from '../pages/JobDetails';
import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';
import Company from '../pages/Company';
import CreateJobs from '../pages/CreateJobs';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Landing} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/job-details/:id" component={JobDetails} />
      <Route path="/signup" component={SignUp} />
      <Route path="/signin" component={SignIn} />
      <Route path="/company" component={Company} />
      <Route path="/jobs/new" component={CreateJobs} />
    </Switch>
  );
};

export default Routes;
