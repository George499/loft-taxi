export const apiFetch = ({ url = "", params = "", method, data }) => {
  if (method === "POST") {
    return fetch(`https://loft-taxi.glitch.me/${url}`, {
      headers: {
        "Content-Type": "application/json;charset=utf-8"
      },
      method: method,
      body: JSON.stringify(data)
    }).then(res => res.json());
  } else {
    return fetch(`https://loft-taxi.glitch.me/${url}${params}`).then(res =>
      res.json()
    );
  }
};
