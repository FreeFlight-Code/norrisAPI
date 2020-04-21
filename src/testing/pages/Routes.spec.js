import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

import React from 'react';
import {Routes, NoMatch} from '../../pages/Routes';
import {MemoryRouter as Router} from 'react-router-dom';
import { render, screen } from "@testing-library/react";
import {shallow} from 'enzyme';
import renderer from "react-test-renderer";



describe (' Routes Page ', () => {
	describe (' renders secure routes  ', () => {
		it(" renders home/login page ", () => {
			const page = shallow(
				<Router initialEntries={["/"]}>
					<Routes loggedin={true} />
				</Router>
			);
			const tree = renderer.create(page).toJSON();
        	expect(tree).toMatchSnapshot();
		});
	})
	describe (' renders unsecure routes ', () => {
		it(' renders unknown "/abc" page ', () => {
			const page = shallow(
				<Router initialEntries={["/abc"]}>
					<Routes loggedin={false}/>
				</Router>
			);
			const tree = renderer.create(page).toJSON();
        	expect(tree).toMatchSnapshot();
		})
	})
});
