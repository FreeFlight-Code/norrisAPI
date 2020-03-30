const defaultState = {
  password: "",
  email: "",
  loggedin: false
}

export const userReducer = (state = defaultState, action) => {
  let newState = {...state};
  switch (action.type) {
    case "LOG_IN": {
      newState.loggedin = true;
      break;
    }
    default:
      // console.log("unknown input type to userReducer... ", action.type);
      break;
  }
  return newState;
};
