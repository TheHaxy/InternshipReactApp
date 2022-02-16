import Cookies from "js-cookie"

const defaultState = ""

export const getTokenReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "GET_TOKEN":
      Cookies.set("TOKEN", action.payload)
        state = action.payload
      return state

    default:
      return state
  }
}