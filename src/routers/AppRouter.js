import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import Authenticate from './Authenticate';

import Sidebar from '../components/Sidebar'
import Dashboard from '../components/Dashboard'
import Login from '../components/Login'
import AddUser from '../components/AddUser'

const AppRouter = () => (
  <BrowserRouter>
    <div >
      <Sidebar />
      <Switch>
        <Route path="/" component={Dashboard} exact={true} />
        <Route path="/login" component={Login} />
        <Route path="/addUser" component={AddUser} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default AppRouter;