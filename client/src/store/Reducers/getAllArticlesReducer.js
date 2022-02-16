const defaultState = []

export const getAllArticlesReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "GET_ALL_ARTICLES":
      state = action.payload
      return state

    default:
      return state
  }
}