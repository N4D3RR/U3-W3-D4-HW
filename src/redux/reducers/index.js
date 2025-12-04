const initialState = {
  favs: {
    content: [],
  },
}

const mainReducer = (currentState = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_FAVS':
      return {
        ...currentState,
        favs: {
          ...currentState.favs,
          content: [...currentState.favs.content, action.payload],
        },
      }

    case 'REMOVE_FROM_FAVS':
      return {
        ...currentState,
        favs: {
          ...currentState.favs,
          content: currentState.favs.content.filter((azienda) => {
            if (azienda === action.payload) {
              return false
            } else {
              return true
            }
          }),
          // PRO VERSION
          // content: currentState.favs.content.filter(a => a !== action.payload)
        },
      }

    default:
      return currentState
  }
}

export default mainReducer
