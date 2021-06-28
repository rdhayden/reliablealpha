import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Dashboard from './components/Dashboard/Dashboard';
import ForgotPassword from './components/Auth/ForgotPassword';
import Help from './components/Help/Help';
import Layout from './components/Layout/Layout';
import Signup from './components/Auth/Signup';
import Login from './components/Auth/Login';

import ResetPassword from './components/Auth/ResetPassword';
import Portfolios from './components/Portfolios/Portfolios';
import PrivateRoute from './components/Route/PrivateRoute';
import NotFound from './components/NotFound/NotFound';

const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <PrivateRoute exact path="/">
            <Dashboard />
          </PrivateRoute>
          <PrivateRoute exact path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          <PrivateRoute exact path="/portfolios">
            <Portfolios />
          </PrivateRoute>
          <PrivateRoute exact path="/help">
            <Help />
          </PrivateRoute>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/forgot-password">
            <ForgotPassword />
          </Route>
          <Route exact path="/reset-password">
            <ResetPassword />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
