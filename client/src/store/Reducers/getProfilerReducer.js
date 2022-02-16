const defaultState = JSON.parse(localStorage.getItem("USER")) || {}

export const getProfileReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "GET_PROFILE":
      localStorage.setItem("USER", JSON.stringify(action.payload))
      state = action.payload
      return state

    default:
      return state
  }
}