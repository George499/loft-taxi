export dafault function setAuthorizationToken() {
if (token) {
    var apiFetch = fetchDefaults(fetch, {
    headers: {Authorization: "Bearer 42"}
})
}
}