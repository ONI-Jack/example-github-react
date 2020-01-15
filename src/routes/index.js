import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../views/home'
import UserDetail from '../views/users/UserDetail'

const Routing = () => (
  <Switch>
    <Route exact path="/home" component={Home} />
    <Route exact path="/users/:username" component={UserDetail} />
  </Switch>
)
export default Routing
