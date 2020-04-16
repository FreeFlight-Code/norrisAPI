import React from "react";
import Search, {SearchResults} from "../../pages/Search";
import renderer from "react-test-renderer";

jest.mock("../../components/LoginForm.jsx");

describe(" The Search Page... ", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Search />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("Results renders correctly", () => {
    const tree = renderer.create(<SearchResults />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
