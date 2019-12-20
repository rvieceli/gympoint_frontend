import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';
import ForgotPassword from '../pages/ForgotPassword';
import ResetPassword from '../pages/ResetPassword';

import Dashboard from '../pages/Dashboard';

import Student from '../pages/Student';
import NewStudent from '../pages/Student/New';
import EditStudent from '../pages/Student/Edit';

import Plan from '../pages/Plan';
import NewPlan from '../pages/Plan/New';
import EditPlan from '../pages/Plan/Edit';

import NewRegistration from '../pages/Registration/New';
import EditRegistration from '../pages/Registration/Edit';
import Registration from '../pages/Registration';
import HelpOrder from '../pages/HelpOrder';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/forgot-password" exact component={ForgotPassword} />
      <Route path="/forgot-password/:token/reset" component={ResetPassword} />

      <Route path="/dashboard" component={Dashboard} isPrivate />

      <Route path="/students/new" component={NewStudent} isPrivate />
      <Route path="/students/:id/edit" component={EditStudent} isPrivate />
      <Route path="/students/:page?" component={Student} isPrivate />

      <Route path="/plans/new" component={NewPlan} isPrivate />
      <Route path="/plans/:id/edit" component={EditPlan} isPrivate />
      <Route path="/plans/:page?" component={Plan} isPrivate />

      <Route path="/registrations/new" component={NewRegistration} isPrivate />
      <Route
        path="/registrations/:id/edit"
        component={EditRegistration}
        isPrivate
      />
      <Route path="/registrations/:page?" component={Registration} isPrivate />
      <Route path="/help-orders/:page?" component={HelpOrder} isPrivate />
    </Switch>
  );
}
