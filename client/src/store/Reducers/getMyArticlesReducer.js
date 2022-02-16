const defaultState = []

export const getMyArticlesReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "GET_MY_ARTICLES":
      state = action.payload
      return state

    default:
      return state
  }
}