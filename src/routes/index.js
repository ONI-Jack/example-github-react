import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../views/home'

const Routing = () => (
  <Switch>
    <Route exact path="/home" component={Home} />
  </Switch>
)
export default Routing
