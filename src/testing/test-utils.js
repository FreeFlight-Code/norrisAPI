import React from "react";
import { render as rtlRender } from "@testing-library/react";
import { store as testStore} from "../store";
import { Provider } from "react-redux";
import {BrowserRouter as Router} from 'react-router-dom'

function render(
  ui,
  {
    initialState = {},
    store = testStore,
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return (
      <Provider store={store}>
        <Router>
          {children}
        </Router>
      </Provider>
    );
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from "@testing-library/react";

// override render method
export { render };
