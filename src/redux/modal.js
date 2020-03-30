const defaultState = {
  show: false,
  message: "",
  messageType: ""
}

export const modalReducer = (state = defaultState, action) => {
  let newState = { ...state };
  switch (action.type) {
    case "DISPLAY_MODAL": {
      newState.show = true
      if(action.message){
        newState.message = action.message;
      }
      if(action.messageType){
        newState.messageType = action.messageType;
      }
      break;
    }
    case "REMOVE_MODAL": {
      newState = {
        show: false
      }
      break;
    }
    default:
      console.log("unknown input type to modalReducer... ", action.type);
      break;
  }
  return newState;
};
