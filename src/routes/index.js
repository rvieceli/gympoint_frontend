import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';
import ForgotPassword from '../pages/ForgotPassword';
import ResetPassword from '../pages/ResetPassword';

import Dashboard from '../pages/Dashboard';
import Student from '../pages/Student';
import Plan from '../pages/Plan';
import Registration from '../pages/Registration';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/forgot-password" exact component={ForgotPassword} />
      <Route path="/forgot-password/:token/reset" component={ResetPassword} />

      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/students" component={Student} isPrivate />
      <Route path="/plans" component={Plan} isPrivate />
      <Route path="/registrations" component={Registration} isPrivate />
    </Switch>
  );
}
