//#redux action types
//unnecessary for smaller apps but implemented for this one to show use
const REMOVE_MODAL = "REMOVE_MODAL";
const DISPLAY_MODAL = "DISPLAY_MODAL";
//action creators
export function displayModal (message){
  return {
    type: DISPLAY_MODAL,
    message: message
  }
}
export function removeModal (){
  return{
    type: REMOVE_MODAL
  }
}


//default state
const defaultState = {
  show: false,
  message: "",
  messageType: ""
}
//reducer
export const modalReducer = (state = defaultState, action) => {
  let newState = { ...state };
  switch (action.type) {
    case DISPLAY_MODAL: {
      newState.show = true;
      if (action.message) {
        newState.message = action.message;
        newState.messageType = "info"
      }
      break;
    }
    case REMOVE_MODAL: {
      newState = {
        show: false
      };
      break;
    }
    default:
      // console.log("unknown input type to modalReducer... ", action.type);
      break;
  }
  return newState;
};
