import React, { Component } from "react";
import {connect} from 'react-redux';
import { handleJokeClick, truncString, getJokesBySearchTerm } from "../js";


class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
      jokes: []
    };
  }

  handleinputChange(val){
    this.setState({
      searchTerm: val
    })
  }

  handleSubmit(){
    const {searchTerm} = this.state;
    getJokesBySearchTerm(searchTerm)
    .then(
      obj => {
        let jokesArray = obj.result;
        this.setState({
          searchTerm: "",
          jokes: jokesArray
        });
    });
  }

  render() {
    const {jokes, searchTerm} = this.state;
    return (
      <div className="page search">
        <label htmlFor="searchBar">Search Bar</label>
        <input value={searchTerm} id="searchBar" type="text" onChange={e=>{this.handleinputChange(e.target.value)}} placeholder="Search Chuck Norris Joke by Key Word"></input>
        <button className="blue" onClick={e=>{this.handleSubmit()}}>Submit</button>
        <div className="results">
          <h3>Results</h3>
          < SearchResults jokes={jokes}/>
        </div>
      </div>
    )
  }
}

export default Search;

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
