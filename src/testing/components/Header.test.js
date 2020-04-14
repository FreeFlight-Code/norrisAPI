import React from "react";
import { connect } from "react-redux";
import { logout } from "../../redux/user";
import renderer from "react-test-renderer";
import HeaderDefault, { Header, Navlinks, mapStateToProps } from '../../components/Header';

jest.mock('react-router-dom');

describe (' Header component ', () => {
	it(' can render Navlinks menu from array provided ', () => {
		const tree = renderer.create(< Navlinks />).toJSON();
        expect(tree).toMatchSnapshot();
	})
	it('can render Header - snapshot match', ()=>{
		let state = {
			user: {
				loggedin: true,
				name: "david"
			}
		}
		const tree = renderer.create(<Header user={state.user}/>).toJSON();
        expect(tree).toMatchSnapshot();
	})
})