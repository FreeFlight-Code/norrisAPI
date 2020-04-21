import React from "react";
import Search, {SearchResults} from "../../pages/Search";
import renderer from "react-test-renderer";
import { fireEvent } from "@testing-library/react";
import {render} from '../test-utils';


describe(" The Search Page... ", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Search />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("Results renders correctly", () => {
    const tree = renderer.create(<SearchResults />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it(' checks input ', () => {
		const { getByTestId } = render(<Search />);
    const input = getByTestId("search-input");
    fireEvent.change(input, { target: { value: "jokes" } });
    expect(input.value).toBe("jokes");
  })
  it(' checks submit ', () => {
		const { getByTestId } = render(<Search />);
    const input = getByTestId("submit-input");
    fireEvent.click(input);
  })
});
