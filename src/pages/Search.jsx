import React, { useState } from "react";
import { handleJokeClick, truncString, getJokesBySearchTerm } from "../js";

//#functional component
function Search () {

  // #hooks #useState 
  const [searchTerm, setSearchTerm] = useState("");
  const [jokes, setJokes] = useState([]);


  function handleinputChange(val){
    setSearchTerm(val)
  }

  function handleSubmit(){
    getJokesBySearchTerm(searchTerm)
    .then(
      obj => {
        let jokesArray = obj.result;
        setJokes(jokesArray)
    });
  }

  return (
    <div className="page search">
      <label htmlFor="searchBar">Search Bar</label>
      <input value={searchTerm} id="searchBar" type="text" onChange={ e => handleinputChange(e.target.value) } placeholder="Search Chuck Norris Joke by Key Word"></input>
      <button className="blue" onClick={ e => handleSubmit() }>Submit</button>
      <div className="results">
        <h3>Results</h3>
        < SearchResults jokes={jokes}/>
      </div>
    </div>
  )
}

export default Search;

//functional component
function SearchResults({jokes}) {
  if (jokes && jokes.length > 0) {
    return jokes.map((joke, i) => {
      let shortJoke = truncString(joke.value, 50);
      return (
        <div onClick={e => handleJokeClick(joke)} key={`joke-${i}`}>
          {shortJoke}
        </div>
      );
    });
  } else return null;
}
