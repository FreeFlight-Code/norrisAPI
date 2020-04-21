import {displayModal, removeModal, modalReducer} from '../../redux/modal'

describe (' modal action reducer ', () => {
	it("displayModal action creator returns type & message", () => {
		const response = displayModal('This is a test message');
		expect(response).toEqual({
			type: "DISPLAY_MODAL",
			message: "This is a test message",
		});
	});
  it("removeModal action creator returns type", () => {
	const response = removeModal();
	expect(response).toEqual({type: "REMOVE_MODAL"})
  });

})
describe (' description  ', () => {
	it(" modalReducer should return correct state for removemodal", () => {
	  let action = {
      type: "REMOVE_MODAL"
    };
    let state = {
      show: true,
      message: "happy days",
      messageType: "info",
    };
    const response = modalReducer(state, action);
    expect(response).toEqual({ show: false });
  });
	it(" modalReducer should return correct state for displaymodal", () => {
	  let action = {
		type: "DISPLAY_MODAL",
		message: "This is a test statement!",
	  };
	  let state = {
		show: false,
		message: "",
		messageType: "",
	  };
	  const response = modalReducer(state, action);
	  expect(response).toEqual({
		show: true,
		message: "This is a test statement!",
		messageType: "info",
	  });
	});
})