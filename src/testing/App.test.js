import React from 'react';
import App from '../App';
import renderer from 'react-test-renderer';

jest.mock('react-router-dom')

describe('the App component',()=>{
	it("matches snapshot", () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
})
