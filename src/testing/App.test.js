import React from "react";
import App from "../App";

import { render } from "./test-utils";
import "@testing-library/jest-dom/extend-expect";


test("App matches snapshot", () => {
  const tree = render(<App />);
  expect(tree).toMatchSnapshot();
});
