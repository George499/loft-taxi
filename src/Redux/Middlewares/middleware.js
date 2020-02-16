import {
  registerUser,
  handleAuth,
  login,
  logout,
  getProfileFetch,
  creditCardSubmit,
  creditCardGet
} from "../Actions/Actions";

const loggerMiddleware = getStore => next => async action => {
  const result = next(action);
  const { type, payload } = action;
  const token = localStorage.getItem("token");
  // eslint-disable-next-line default-case
  switch (type) {
    case registerUser.toString():
      fetch("https://loft-taxi.glitch.me/register", {
        headers: {
          "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(payload)
      })
        .then(res => res.json())
        .then(data => {
          if (data.success) {
            getStore.dispatch(login(payload));
            localStorage.setItem("token", data.token);
          } else {
            alert(data.error);
          }
        });

      break;

    case handleAuth.toString():
      fetch("https://loft-taxi.glitch.me/auth", {
        headers: {
          "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(payload)
      })
        .then(res => res.json())
        .then(data => {
          if (data.success) {
            getStore.dispatch(login(payload));
            localStorage.setItem("token", data.token);
          } else {
            localStorage.removeItem("token", data.token);
            getStore.dispatch(logout());
            alert(data.error);
          }
        });
      break;

    case getProfileFetch.toString():
      const localStorageUser = JSON.parse(localStorage.getItem("state"))
        .currentUser;
      const userToParse = JSON.stringify(localStorageUser);

      if (token) {
        fetch("https://loft-taxi.glitch.me/auth", {
          headers: {
            "Content-Type": "application/json"
          },
          method: "POST",
          body: userToParse
        })
          .then(res => res.json())
          .then(data => {
            if (data.success) {
              getStore.dispatch(login(localStorageUser));
            } else {
              getStore.dispatch(logout());
            }
          });
      }
      break;

    case creditCardSubmit.toString():
      const creditCardToParse = action.payload;
      creditCardToParse["token"] = token;
      fetch("https://loft-taxi.glitch.me/card", {
        headers: {
          "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(creditCardToParse)
      }).then(res => res.json());

      break;

    case creditCardGet.toString():
      fetch(`https://loft-taxi.glitch.me/card?token=${token}`, {
        headers: {
          "Content-Type": "application/json"
        },
        method: "GET"
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          getStore.dispatch(creditCardGet(data));
        });
  }

  return result;
};

export default loggerMiddleware;
