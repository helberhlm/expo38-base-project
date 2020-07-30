const INITIAL_STATE = { 
  isLogged: false,
  type: "",
  token: "",
  user: {},
}

export default function currentSession(state = INITIAL_STATE, action) {
  switch(action.type) {
    case "SET_SESSION":
      return {
        ...action.payload,
        isLogged: true,
      };
    case "SET_USER":
      return {
        ...state,
        isLogged: true,
        user: action.payload,
      }
    case "LOGOUT_USER":
      return {
        isLogged: false,
      };
    default:
      return state;
  }
}