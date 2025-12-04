import { configureStore } from "@reduxjs/toolkit"
import favsReducer from "../reducers/favsReducer"
import jobsReducer from "../reducers/jobsReducer"
const store = configureStore({
  reducer: {
    favs: favsReducer,
    jobs: jobsReducer,
  },
})

export default store
