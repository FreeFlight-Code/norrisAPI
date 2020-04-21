import React from 'react';
import {LoginForm} from '../../components/LoginForm';
import { cleanup, render, fireEvent } from '@testing-library/react';



afterEach(cleanup);

const setup = () => {
  const utils = render(<LoginForm />);
  const passInput = utils.getByLabelText("cost-input");
  return {
    input,
    ...utils,
  };
};

describe (' Login Form ', () => {
	it(' matches snapshot ', () => {
		const { asFragment } = render(<LoginForm />);
		expect(asFragment()).toMatchSnapshot();
	})
	it(' has email input ', () => {
		const { getByTestId } = render( <LoginForm /> );
		const input = getByTestId("email-input");
		fireEvent.change(input, { target: { value: "david@david.com" } });
		expect(input.value).toBe("david@david.com");
	})
	it(' has password input ', () => {
		const { getByTestId } = render( <LoginForm /> );
		const input = getByTestId("password-input");
		fireEvent.change(input, { target: { value: "asdA1as" } });
		expect(input.value).toBe("asdA1as");
	})
	it(' submit button works ', () => {
		const { getByTestId } = render( <LoginForm /> );
		const input = getByTestId("submit-input");
		fireEvent.click(input);
	})
})