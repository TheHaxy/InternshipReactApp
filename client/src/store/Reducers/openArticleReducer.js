const defaultState = {}

export const openArticleReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "OPEN_ARTICLE":
        state = action.payload
      return state

    default:
      return state
  }
}