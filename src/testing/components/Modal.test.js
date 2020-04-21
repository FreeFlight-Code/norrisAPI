import React from 'react';
import {Modal} from '../../components/Modal';
import renderer from 'react-test-renderer';


var children;
beforeEach(() => {
	children = {
	message: "",
	messageType: "",
	show: false,
	};
});


describe('the modal component', ()=>{
	it('doesn\'t render if show=false', () => {
		const tree = renderer
			.create( < Modal modal={children} />).toJSON();
	});
	it('does render if show=true', () => {
		children.show = true;
		const tree = renderer
			.create( < Modal modal={children} />).toJSON();
		expect(tree).toMatchSnapshot();
	});

})
