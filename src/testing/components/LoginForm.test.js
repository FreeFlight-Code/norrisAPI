import React from 'react';
import {LoginForm} from '../../components/LoginForm';
import renderer from 'react-test-renderer';
import { connect } from "react-redux";
import { removeModal, displayModal } from "../../redux/modal";
import { login } from "../../redux/user";
import { cleanup } from '@testing-library/react';
// import { render, cleanup, fireEvent } from "react-testing-library";


beforeEach(()=>{
	cleanup();
})
it('renders Login Form', () => {
	const tree = renderer
		.create( < LoginForm />).toJSON();
		// console.log(tree.children[1])
	expect(tree).toMatchSnapshot();
});
