import {put, takeEvery} from "redux-saga/effects";
import {ASYNC_GET_PROFILE} from "../actionTypes";
import {instance} from "../instances";
import {getProfileAction} from "../action";
import Cookies from "js-cookie";

function* getProfileWorker(action) {
  const profileData = yield instance.patch("profile",
      {...action.payload},
      {headers: {'Authorization': Cookies.get("TOKEN")}})
  try {
    yield put(getProfileAction(profileData.data))
  } catch (e) {
    console.log(e)
  }
}

export function* getProfileWatcher() {
  yield takeEvery(ASYNC_GET_PROFILE, getProfileWorker)
}
