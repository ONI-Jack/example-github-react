import { FETCH_USER_NAME } from '../actions'

const initialState = {
  isFetching: false,
  data: {},
  error: null
}

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_USER_NAME.PENDING:
      return {
        ...state,
        isFetching: true
      }
    case FETCH_USER_NAME.SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: payload
      }
    case FETCH_USER_NAME.FAIELD:
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
