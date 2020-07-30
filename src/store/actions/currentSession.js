export const setSession = (user) => ({
    type: "SET_SESSION",
    payload: user
});

export const setUser = (user) => ({
    type: "SET_USER",
    payload: user
});

export const logoutUser = () => ({
    type: "LOGOUT_USER"
});