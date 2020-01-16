import API from '../services/api'

const createAction = name => ({
  PENDING: `${name}_PENDING`,
  SUCCESS: `${name}_SUCCESS`,
  FAIELD: `${name}_FAIELD`
})

export const FETCH_USER_NAME = createAction('FETCH_USER_NAME')
export const FETCH_USER_RESPOSITORIES = createAction('FETCH_USER_RESPOSITORIES')
export const SEARCH_USERNAME = createAction('SEARCH_USERNAME')

export const fetchUsername = username => async dispatch => {
  dispatch({
    type: FETCH_USER_NAME.PENDING
  })

  try {
    const user = await API.fetchUsername(username)
    dispatch({
      type: FETCH_USER_NAME.SUCCESS,
      payload: user
    })
  } catch (error) {
    dispatch({
      type: FETCH_USER_NAME.FAIELD,
      payload: error
    })
  }
}

export const fetchUserRepositories = username => async dispatch => {
  dispatch({
    type: FETCH_USER_RESPOSITORIES.PENDING
  })
  try {
    const userRepo = await API.fetchUserRepository(username)
    dispatch({
      type: FETCH_USER_RESPOSITORIES.SUCCESS,
      payload: userRepo
    })
  } catch (error) {
    dispatch({
      type: FETCH_USER_RESPOSITORIES.FAIELD,
      payload: error
    })
  }
}

export const searchUsername = (
  username,
  items_per_page,
  current_page
) => async dispatch => {
  dispatch({
    type: SEARCH_USERNAME.PENDING
  })

  try {
    const searchUsers = await API.searchUsername(username)
    dispatch({
      type: SEARCH_USERNAME.SUCCESS,
      payload: searchUsers
    })
  } catch (error) {
    dispatch({
      type: SEARCH_USERNAME.FAIELD,
      payload: error
    })
  }
}
