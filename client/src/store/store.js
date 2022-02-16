import createSagaMiddleware from "redux-saga"
import {applyMiddleware, combineReducers, createStore} from "redux";
import {all} from "redux-saga/effects"
import {loginWatcher, registerWatcher} from "./Saga/authSaga";
import {getProfileWatcher} from "./Saga/profileSaga"
import {getTokenReducer} from "./Reducers/getTokenReducer";
import {getProfileReducer} from "./Reducers/getProfilerReducer";
import {addArticleWatcher, getAllArticlesWatcher, getMyArticlesWatcher, openArticleWatcher} from "./Saga/articleSaga"
import {getAllArticlesReducer} from "./Reducers/getAllArticlesReducer";
import {getMyArticlesReducer} from "./Reducers/getMyArticlesReducer";
import {openArticleReducer} from "./Reducers/openArticleReducer"

export default function* rootSaga() {
  yield all([
    registerWatcher(),
    loginWatcher(),
    getProfileWatcher(),
    getAllArticlesWatcher(),
    getMyArticlesWatcher(),
    addArticleWatcher(),
    openArticleWatcher()
  ])
}

const sagaMiddleware = createSagaMiddleware()
const rootReducer = combineReducers({
  getTokenReducer,
  getProfileReducer,
  getAllArticlesReducer,
  getMyArticlesReducer,
  openArticleReducer
})

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)