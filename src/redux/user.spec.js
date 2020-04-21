import { userReducer, login, logout, defaultState } from './user';

var state = {pre: "before setting"}
beforeEach(()=>{
	state = defaultState;
})

describe (' user reducer action creators', () => {
	it(' login action creator returns type and payload ', () => {
		const user = {
			password: "Test Name",
			email: "simple"
		}
		const results = login(user);
		expect(results).toMatchObject({type: "LOG_IN", payload: expect.anything()});
	});
	it(' logout action creator returns type ', () => {

		const results = logout();
		expect(results).toMatchObject({type: "LOG_OUT"});
	});
})
describe (' user reducer ', () => {
	it(' returns state if unknown type passed ', () => {
		let action = {
			type: "UNKNOWN_ACTION",
			payload: {random: "stuff in here"}
		}
		const sameState = userReducer(defaultState, action);
		expect(sameState).toStrictEqual(defaultState);
	})
	it(' updates logged in to logged out for logout ', () => {
		let action = {
          type: "LOG_OUT"
        };
        const newState = userReducer(defaultState, action);
        expect(newState.loggedin).toBeFalsy();
	})
	it(' updates logged out to logged in and adds user info for login ', () => {
		let user = {
			email: "davidfisc.com",
			password: "243sfdg"
		}
		let action = login(user);
		const newState = async ()=>{
			await userReducer(defaultState, action);
		}
	// 	expect(newState.loggedin).toBeTruthy();	
	})
})	