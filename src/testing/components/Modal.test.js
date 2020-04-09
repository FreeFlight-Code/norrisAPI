import React from 'react';
import {Modal} from '../../components/Modal';
import renderer from 'react-test-renderer';

const children = {
  message: "",
  messageType: "",
  show: false
};
describe('the modal component', ()=>{
	it('renders', () => {
		const tree = renderer
			.create( < Modal modal={children} />).toJSON();
		expect(tree).toMatchSnapshot();
	});

})
