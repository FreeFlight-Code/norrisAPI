import React from "react";
import {JokesPage, List, Joke} from "../../pages/Jokes";
import renderer from "react-test-renderer";

jest.mock("../../components/LoginForm.jsx");

var history = []
beforeEach(()=>{
	history = [
    {
      categories: ["turtle"],
      viewed_at: new Date(1997, 1, 2, 1, 30),
      value: "what up",
    },
    {
      categories: ["apple"],
      viewed_at: new Date(1998, 1, 2, 14, 30),
      value: "always smile",
    },
    {
      categories: ["water"],
      viewed_at: new Date(1999, 1, 2, 10, 30),
      value: "COVID-19",
    },
    {
      categories: ["giraffe"],
      viewed_at: new Date(1990, 1, 2, 4, 30),
      value: "peace on earth",
    },
    {
      categories: ["bear"],
      viewed_at: new Date(1994, 1, 2, 2, 30),
      value: "whello world",
    }
  ];
})

describe(" The Jokes Page... ", () => {
  it("page renders correctly", () => {
    const tree = renderer.create(<JokesPage />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("list renders correctly", () => {
    const tree = renderer.create(<List history={history}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("joke renders correctly", () => {
    const tree = renderer.create(<Joke {...history[0]}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });

});
