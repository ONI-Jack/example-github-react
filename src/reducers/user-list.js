import { SEARCH_USERNAME } from '../actions'

const initialState = {
  isFetching: false,
  data: [],
  error: null
}

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SEARCH_USERNAME.PENDING:
      return {
        ...state,
        isFetching: true
      }
    case SEARCH_USERNAME.SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: payload
      }
    case SEARCH_USERNAME.FAIELD:
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
