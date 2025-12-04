import { GET_JOBS, GET_JOBS_ERROR } from "../actions"

const initialState = {
  results: [],
  error: false,
}

const jobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_JOBS:
      return {
        ...state,
        results: action.payload,
        error: false,
      }
    case GET_JOBS_ERROR:
      return {
        ...state,
        error: true,
      }
    default:
      return state
  }
}
export default jobsReducer
