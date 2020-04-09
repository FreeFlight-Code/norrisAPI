import React from 'react';
import Categories from '../../pages/Categories';
import renderer from 'react-test-renderer';

describe("renders Categories", ()=>{
	it('without error', () => {
	const tree = renderer
		.create( < Categories /> ).toJSON();
	expect(tree).toMatchSnapshot();
	})
});