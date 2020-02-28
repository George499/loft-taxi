import { apiFetch } from "../Middlewares/apiFetch";
import {
  getAddressListRequest,
  getAddressListFetch,
  getCoordinatesRequest,
  getCoordinatesSuccess
} from "../Actions/Actions";
import { takeEvery, select, call, put } from "redux-saga/effects";

function* handleAddressList() {
  const adressList = yield call(apiFetch, {
    url: "addressList",
    method: "GET"
  });
  yield put(getAddressListFetch(adressList.addresses));
}

export function* addressList() {
  yield takeEvery(getAddressListRequest, handleAddressList);
}

function* handleGetCoordinates() {
  const state = yield select();
  const { address1, address2 } = state.routes;
  const coordinates = yield call(apiFetch, {
    url: `route?address1=${address1}&address2=${address2}`,
    method: "GET"
  });

  yield put(getCoordinatesSuccess(coordinates));
}

export function* getCoordinates() {
  yield takeEvery(getCoordinatesRequest, handleGetCoordinates);
}
