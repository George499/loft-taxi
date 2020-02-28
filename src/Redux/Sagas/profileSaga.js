import { apiFetch } from "../Middlewares/apiFetch";
import { login, creditCardSubmit } from "../Actions/Actions";
import { takeEvery, call, put } from "redux-saga/effects";

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
export function* creditCard() {
  yield takeEvery(creditCardSubmit, handleCreditCard);
}
