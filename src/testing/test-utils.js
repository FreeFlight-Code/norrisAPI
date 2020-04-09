// test-utils.js
import React from "react";
import { render as rtlRender } from "@testing-library/react";
import { store as testStore} from "../store";
import { Provider } from "react-redux";
// import { initialState as reducerInitialState } from "./reducer";

const reducerInitialState = {};

function render(
  ui,
  {
    initialState = reducerInitialState,
    store = testStore,
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from "@testing-library/react";

// override render method
export { render };
