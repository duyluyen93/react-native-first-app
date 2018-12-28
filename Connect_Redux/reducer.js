import { LOADING, SUCCESSFUL, ERROR } from './actions'

const initialState = {
  list: null,
  loading: false,
  error: null
}

export function reducer(state = initialState, action) {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: true,
        error: null
      }
    case SUCCESSFUL:
      return {
        ...state,
        list: action.payload.list,
        loading: false,
      }
    case ERROR:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
        list: null
      }
    default:
      return state
  }
}