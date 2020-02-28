import { fork } from "redux-saga/effects";
import { authSaga } from "./authSaga";
import { creditCard } from "./profileSaga";
import { registrationSaga, fetchProfile } from "./registerSaga";
import { addressList, getCoordinates } from "./routesSaga";

export default function*() {
  yield fork(authSaga);
  yield fork(registrationSaga);
  yield fork(fetchProfile);
  yield fork(creditCard);
  yield fork(addressList);
  yield fork(getCoordinates);
}
