import { registerUser, handleAuth } from "../Actions/Actions";

const loggerMiddleware = getStore => next => async action => {
  const result = next(action);
  const { type, payload } = action;
  // eslint-disable-next-line default-case
  switch (type) {
    case registerUser.toString():
      await fetch("https://loft-taxi.glitch.me/register", {
        headers: {
          "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(payload)
      })
        .then(res => res.json())
        .then(data => console.log(data));

      break;

    case handleAuth.toString():
      await fetch("https://loft-taxi.glitch.me/auth", {
        headers: {
          "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(payload)
      })
        .then(res => res.json())
        .then(data => console.log(data));

      break;
  }

  return result;
};

export default loggerMiddleware;
