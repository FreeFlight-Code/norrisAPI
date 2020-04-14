import React from 'react';
import Categories, { CategoriesList } from '../../pages/Categories';
import renderer from 'react-test-renderer';

describe("renders Categories", ()=>{
	it('categories without error', () => {
		const tree = renderer
		.create( < Categories /> ).toJSON();
		expect(tree).toMatchSnapshot();
	})
	it('categorieslist without error', () => {
		const categories = ['time', 'hello', 'react', 'japan']
		const tree = renderer
		.create( < CategoriesList categories={categories}/> ).toJSON();
		expect(tree).toMatchSnapshot();
	})
});