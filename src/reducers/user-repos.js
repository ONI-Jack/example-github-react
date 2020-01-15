import { FETCH_USER_RESPOSITORIES } from '../actions'

const initialState = {
  isFetching: false,
  data: [],
  error: null
}

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_USER_RESPOSITORIES.PENDING:
      return {
        ...state,
        isFetching: true
      }
    case FETCH_USER_RESPOSITORIES.SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: payload
      }
    case FETCH_USER_RESPOSITORIES.FAIELD:
      return {
        ...state,
        isFetching: false,
        error: payload
      }
    default:
      return state
  }
}

export default reducer
