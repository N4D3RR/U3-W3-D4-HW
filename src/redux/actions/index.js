export const ADD_TO_FAVS = "ADD_TO_FAVS"
export const REMOVE_FROM_FAVS = "REMOVE_FROM_FAVS"
export const GET_JOBS = "GET_JOBS"
export const GET_JOBS_ERROR = "GET_JOBS_ERROR"

export const addToFavsAction = (company) => {
  return {
    type: ADD_TO_FAVS,
    payload: company,
  }
}

export const removeFromFavs = (company) => {
  return {
    type: REMOVE_FROM_FAVS,
    payload: company,
  }
}

export const getJobsAction = (jobs) => {
  return {
    type: GET_JOBS,
    payload: jobs,
  }
}

export const getJobsErrorAction = () => {
  return {
    type: GET_JOBS_ERROR,
  }
}

export const fetchJobsAction = (query) => {
  return (dispatch) => {
    fetch("https://strive-benchmark.herokuapp.com/api/jobs?search=" + query)
      .then((r) => {
        if (r.ok) {
          return r.json()
        } else {
          throw new Error()
        }
      })
      .then((data) => {
        dispatch(getJobsAction(data))
      })
      .catch((err) => {
        dispatch(getJobsErrorAction())
      })
  }
}
