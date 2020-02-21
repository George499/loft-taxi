import { take, takeEvery, put, call, fork, select } from "redux-saga/effects";
import { apiFetch } from "../../apiFetch";
import {
  registerUser,
  handleAuth,
  login,
  logout,
  getProfileFetch,
  creditCardSubmit,
  getAddressListRequest,
  getAddressListFetch,
  getCoordinatesRequest,
  getCoordinatesSuccess
} from "../Actions/Actions";

// AUTH

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

function* authSaga() {
  yield takeEvery(handleAuth, handleAuthSaga);
}

// Register

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

function* registrationSaga() {
  yield takeEvery(registerUser.toString(), handleRegistrationSaga);
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

function* fetchProfile() {
  yield takeEvery(getProfileFetch.toString(), handleFetchProfile);
}

// Credit Cards
function* handleCreditCard(action) {
  const creditCardToParse = action.payload;
  creditCardToParse["token"] = localStorage.getItem("token");
  const response = yield call(apiFetch, {
    url: "card",
    body: JSON.stringify(creditCardToParse),
    method: "POST"
  });
  if (response.success) {
    alert("Данные карты сохранены");
    yield put(login());
  } else {
    alert(response.error);
  }
}
function* creditCard() {
  yield takeEvery(creditCardSubmit.toString(), handleCreditCard);
}

// ROUTES

function* handleAddressList() {
  const adressList = yield call(apiFetch, {
    url: "addressList",
    method: "GET"
  });
  yield put(getAddressListFetch(adressList.addresses));
}

function* addressList() {
  yield takeEvery(getAddressListRequest.toString(), handleAddressList);
}

function* handleGetCoordinates(selectAddressList) {
  const adressList = yield call(apiFetch, {
    url: "route",
    method: "GET",
    params: {
      address1: selectAddressList.routesAddress.address1,
      address2: selectAddressList.routesAddress.address2
    }
  });
  yield put(getAddressListFetch(adressList.addresses));
}

function* getCoordinates() {
  yield takeEvery(getCoordinatesRequest.toString(), handleGetCoordinates);
}

//   {
//     console.log(state);
//     // const addressList = state => state.routes;
//     // const selectAddressList = yield select(addressList);
//     // const result = yield call(handleGetCoordinates, selectAddressList);
//     // yield put(getCoordinatesSuccess(result));
//   });
// }

export default function*() {
  yield fork(authSaga);
  yield fork(registrationSaga);
  yield fork(fetchProfile);
  yield fork(creditCard);
  yield fork(addressList);
  yield fork(getCoordinates);
}
