import { combineReducers } from 'redux'

import { createBrowserHistory } from 'history'
import { connectRouter } from 'connected-react-router'

const history = createBrowserHistory()

export default combineReducers({
  router: connectRouter(history)
})
