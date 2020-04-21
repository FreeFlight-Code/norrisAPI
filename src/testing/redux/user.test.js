import { logout, login, userReducer } from "../../redux/user";

describe(" user action reducer ", () => {
  it("login action creator returns type & message", () => {
	  let user = {
		  email: "abc@abc.com",
		  password: '123abc'
	  }
    const response = login(user);
    expect(response).toEqual({
      type: "LOG_IN",
      payload: user,
    });
  });
  it("logout action creator returns type", () => {
    const response = logout();
    expect(response).toEqual({ type: "LOG_OUT" });
  });
});
describe(" userReducer should return correct state  ", () => {
  it(" userReducer should return correct state for login", () => {
	let user = {
		email: "abc@abc.com",
		password: "123abc",
	};
    let action = {
	  type: "LOG_IN",
	  payload: user
    };
    let state = {
		loggedin: false
    };
    const response = userReducer(state, action);
    expect(response).toEqual({
      loggedin: true
    });
  });
  it(" userReducer should return correct state for logout", () => {

    let action = {
	  type: "LOG_OUT"
    };
    let state = {
		loggedin: false
    };
    const response = userReducer(state, action);
    expect(response).toEqual({
      loggedin: false
    });
  });

});
