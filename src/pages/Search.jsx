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

  async function handleSubmit(){
    const jokesArray = await getJokesBySearchTerm(searchTerm);
      setJokes(jokesArray);
  }

  return (
    // 
    <div style={style.searchPage}className="page search">
      <label htmlFor="searchBar">Search Bar</label>
      {/* #styles type 1 - inline */}
      <input style={{padding: "10px 15px"}} value={searchTerm} id="searchBar" type="text" onChange={ e => handleinputChange(e.target.value) } placeholder="Search Chuck Norris Joke by Key Word"></input>
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
export function SearchResults({jokes}) {
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

//#style type 2 - style names will be camelCased rather than with '-' dashes (i.e. backgroundColor rather than background-color)
const style = {
  searchPage: {
    padding: "10vh 3vw",
    background: "linear-gradient(#dddcdc 10%, #b3b2b2)"
  }
};