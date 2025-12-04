import { ADD_TO_FAVS, REMOVE_FROM_FAVS } from "../actions"

const initialState = {
  content: [],
}

const favsReducer = function (currentState = initialState, action) {
  switch (action.type) {
    case ADD_TO_FAVS:
      return {
        ...currentState,
        content: [currentState.content, action.payload],
      }

    case REMOVE_FROM_FAVS:
      return {
        ...currentState,
        content: currentState.content.filter((company) => {
          company !== action.payload
        }),
      }

    default:
      return currentState
  }
}
export default favsReducer
