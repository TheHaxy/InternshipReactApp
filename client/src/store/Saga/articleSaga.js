import {put, takeEvery} from "redux-saga/effects";
import {
  ASYNC_ADD_ARTICLE,
  ASYNC_GET_ALL_ARTICLES,
  ASYNC_GET_MY_ARTICLES, ASYNC_OPEN_ARTICLE,
} from "../actionTypes";
import {instance} from "../instances";
import {getAllArticlesAction, getMyArticlesAction, openArticleAction} from "../action";
import Cookies from "js-cookie";

function* getAllArticlesWorker() {
  const allArticles = yield instance.get("main-page", {headers: {'Authorization': Cookies.get("TOKEN")}})
  try {
    yield put(getAllArticlesAction(allArticles.data))
  } catch (e) {
    console.log(e)
  }
}

function* getMyArticlesWorker() {
  const myArticles = yield instance.get(
      "my-articles",
      {headers: {'Authorization': Cookies.get("TOKEN")}})
  try{
    yield put(getMyArticlesAction(myArticles.data))
  } catch (e) {
    console.log(e)
  }
}

function* addArticleWorker(action) {
  yield instance.post(
      "create-article",
      {...action.payload},
      {headers: {'Authorization': Cookies.get("TOKEN")}})
  try{
    const allArticles = yield instance.get("main-page", {headers: {'Authorization': Cookies.get("TOKEN")}})
    try {
      yield put(getAllArticlesAction(allArticles.data))
    } catch (e) {
      console.log(e)
    }
  } catch (e) {
    console.log(e)
  }
}

function* articleOnClickWorker(action) {
  const newArticle = yield instance.patch("article-onclick",
      {views: action.payload.views + 1, _id: action.payload._id},
      {headers: {'Authorization': Cookies.get("TOKEN")}})
  try {
    yield put(openArticleAction(newArticle.data))
  } catch (e) {
    console.log(e)
  }
}

export function* getAllArticlesWatcher() {
  yield takeEvery(ASYNC_GET_ALL_ARTICLES, getAllArticlesWorker)
}

export function* getMyArticlesWatcher() {
  yield takeEvery(ASYNC_GET_MY_ARTICLES, getMyArticlesWorker)
}

export function* addArticleWatcher() {
  yield takeEvery(ASYNC_ADD_ARTICLE, addArticleWorker)
}

export function* openArticleWatcher() {
  yield takeEvery(ASYNC_OPEN_ARTICLE, articleOnClickWorker)
}