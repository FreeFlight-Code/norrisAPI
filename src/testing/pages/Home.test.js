import React from 'react';
import Home from '../../pages/Home';
import renderer from 'react-test-renderer';

jest.mock('../../components/LoginForm.jsx')

describe (' The Home Page... ', () => {
	it("renders correctly", () => {
	const tree = renderer.create(< Home />).toJSON();
	expect(tree).toMatchSnapshot();
	});
	//Does homepage render Login component
})

