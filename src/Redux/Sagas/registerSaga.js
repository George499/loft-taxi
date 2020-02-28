import { apiFetch } from "../Middlewares/apiFetch";
import {
  registerUser,
  login,
  logout,
  getProfileFetch
} from "../Actions/Actions";
import { takeEvery, call, put } from "redux-saga/effects";

function* handleRegistrationSaga(action) {
  try {
    const response = yield call(apiFetch, {
      url: "register",
      data: action.payload,
      method: "POST"
    });
    if (response.success === false) {
      alert(response.error);
    } else {
      yield put(login(action.payload));
      localStorage.setItem("token", response.token);
    }
  } catch (e) {
    alert(e);
  }
}

export function* registrationSaga() {
  yield takeEvery(registerUser, handleRegistrationSaga);
}

function* handleFetchProfile() {
  const token = localStorage.getItem("token");
  if (token) {
    const localStorageUser = JSON.parse(localStorage.getItem("state"))
      .currentUser;
    const userToParse = JSON.stringify(localStorageUser);
    const response = yield call(apiFetch, {
      url: "auth",
      body: userToParse,
      method: "POST"
    });
    if (response.success) {
      yield put(login(localStorageUser));
    }
  } else {
    yield put(logout());
  }
}

export function* fetchProfile() {
  yield takeEvery(getProfileFetch, handleFetchProfile);
}
