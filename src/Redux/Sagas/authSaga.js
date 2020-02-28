import { apiFetch } from "../Middlewares/apiFetch";
import { handleAuth, login, logout } from "../Actions/Actions";
import { takeEvery, call, put } from "redux-saga/effects";

function* handleAuthSaga(action) {
  try {
    const response = yield call(apiFetch, {
      url: "auth",
      data: action.payload,
      method: "POST"
    });
    if (response.success === false) {
      yield put(logout());
      alert(response.error);
    } else {
      yield put(login(action.payload));
      localStorage.setItem("token", response.token);
    }
  } catch (e) {
    alert(e);
  }
}

export function* authSaga() {
  yield takeEvery(handleAuth, handleAuthSaga);
}
