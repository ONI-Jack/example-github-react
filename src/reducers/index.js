import { combineReducers } from 'redux'
import { createBrowserHistory } from 'history'
import { connectRouter } from 'connected-react-router'

import userDetail from './user-detail'
import userRepos from './user-repos'

const history = createBrowserHistory()

export default combineReducers({
  router: connectRouter(history),
  user: userDetail,
  repos: userRepos
})
