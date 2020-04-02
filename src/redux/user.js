const defaultState = {
  password: "",
  email: "",
  loggedin: false
}

const simulatedAuthenticationCall = new Promise((resolve, reject)=>{
  //set resolve timeout less if you want auth call to succeed
  setTimeout(() => {
      resolve(true)
  }, 1000);
  setTimeout(() => {
      reject("User information not valid")
  }, 2000);
})

export const userReducer = (state = defaultState, action) => {
  let newState = {...state};
  switch (action.type) {
    case "LOG_IN": {
      simulatedAuthenticationCall
        .then( () => {
          newState.loggedin = true;
        })
        .catch( err => {
          console.error(err)
        })
      break;
    }
    case "LOG_OUT": {
      newState.loggedin = false;
      break;
    }
    default:
      // console.log("unknown input type to userReducer... ", action.type);
      break;
  }
  return newState;
};
