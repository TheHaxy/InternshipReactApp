import {
  ADD_ARTICLE,
  ASYNC_ADD_ARTICLE,
  ASYNC_GET_ALL_ARTICLES,
  ASYNC_GET_MY_ARTICLES,
  ASYNC_GET_PROFILE,
  ASYNC_LOGIN, ASYNC_OPEN_ARTICLE,
  ASYNC_REGISTER,
  CHANGE_PROFILE,
  GET_ALL_ARTICLES,
  GET_MY_ARTICLES,
  GET_PROFILE,
  GET_TOKEN, OPEN_ARTICLE,
} from "./actionTypes";

export function getTokenAction(payload) {
  return {
    type: GET_TOKEN,
    payload
  }
}

export function addArticleAction(payload) {
  return {
    type: ADD_ARTICLE,
    payload
  }
}

export function getAllArticlesAction(payload) {
  return {
    type: GET_ALL_ARTICLES,
    payload
  }
}

export function getMyArticlesAction(payload) {
  return {
    type: GET_MY_ARTICLES,
    payload
  }
}

export function getProfileAction(payload) {
  return {
    type: GET_PROFILE,
    payload
  }
}

export function changeProfileAction(payload) {
  return {
    type: CHANGE_PROFILE,
    payload
  }
}

export function openArticleAction(payload) {
  return {
    type: OPEN_ARTICLE,
    payload
  }
}

export function asyncRegisterAction(payload) {
  return {
    type: ASYNC_REGISTER,
    payload
  }
}

export function asyncLoginAction(payload) {
  return {
    type: ASYNC_LOGIN,
    payload
  }
}

export function asyncAddArticleAction(payload) {
  return {
    type: ASYNC_ADD_ARTICLE,
    payload
  }
}

export function asyncGetAllArticlesAction(payload) {
  return {
    type: ASYNC_GET_ALL_ARTICLES,
    payload
  }
}

export function asyncGetMyArticlesAction(payload) {
  return {
    type: ASYNC_GET_MY_ARTICLES,
    payload
  }
}

export function asyncGetProfileAction(payload) {
  return {
    type: ASYNC_GET_PROFILE,
    payload
  }
}

export function asyncOpenArticleAction(payload) {
  return {
    type: ASYNC_OPEN_ARTICLE,
    payload
  }
}
