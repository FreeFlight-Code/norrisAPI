const LOG_IN = "LOG_IN";
const LOG_OUT = "LOG_OUT";

export function login(user) {
  return {
    type: LOG_IN,
    payload: user
  };
}
export function logout() {
  return {
    type: LOG_OUT
  };
}

export const defaultState = {
  password: "",
  email: "",
  loggedin: false
}

export const userReducer = (state = defaultState, action) => {
  let newState = {...state};
  switch (action.type) {
    case LOG_IN: {
      newState.loggedin = true;
      break;
    }
    case LOG_OUT: {
      newState.loggedin = false;
      break;
    }
    default:
      // console.log("unknown input type to userReducer... ", action.type);
      break;
  }
  return newState;
};

//#promises

