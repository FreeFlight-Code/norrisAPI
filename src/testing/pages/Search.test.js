import React from "react";
import Search, {SearchResults} from "../../pages/Search";
import renderer from "react-test-renderer";
import data from '../testData.json'
import { fireEvent, cleanup, screen } from "@testing-library/react";
import {render} from '../test-utils';

beforeEach(()=>{
  cleanup();
  const exampleHTML = `
  <div id="root"><div>Hello World</div></div>
`;
  document.body.innerHTML = exampleHTML;
})



describe(" The Search Page... ", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Search />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("Results renders correctly without jokes", () => {
    const tree = renderer.create(<SearchResults />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("Results renders correctly with jokes", () => {
    const jokes = data.result;
    const tree = renderer.create(<SearchResults jokes={jokes}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
   it(" checks input ", () => {
     const { getByTestId } = render(<Search />);
     const input = getByTestId("search-input");
     fireEvent.change(input, { target: { value: "jokes" } });
     expect(input.value).toBe("jokes");
   });
   it(" checks submit ", () => {
     const { getByTestId } = render(<Search />);
     const input = getByTestId("submit-input");
     fireEvent.click(input);
   });
});
