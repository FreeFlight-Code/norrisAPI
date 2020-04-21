import React from "react";
import App from '../App';
import { createStore } from 'redux';
// We're using our own custom render function and not RTL's render
// our custom utils also re-export everything from RTL
// so we can import fireEvent and screen here as well
import { render } from "./test-utils";
import "@testing-library/jest-dom/extend-expect";
import store from '../store';

// const App = ()=>{
// 	return <div>Hello World</div>
// }

test("can render redux with defaults", () => {
  render(<App />);
});

// test("can render redux with custom initial state", () => {
//   render(<App />, {
//     initialState: { count: 3 },
//   });
// });

// test("can render redux with custom store", () => {
//   // this is a silly store that can never be changed
//   const customStore = createStore(() => ({ count: 1000 }));
//   render(<App />, {
//     customStore,
//   });

// });
