import React from 'react';
import {LoginForm} from '../../components/LoginForm';
import renderer from 'react-test-renderer';

it('renders Login Form', () => {
	const tree = renderer
		.create( < LoginForm />).toJSON();
	expect(tree).toMatchSnapshot();
});
