import React, { Component } from "react";


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
    fetch(`https://api.chucknorris.io/jokes/search?query=${searchTerm}`)
      .then(res => res.json())
      .then(obj => {
        let jokesArray = obj.result;
        console.log(jokesArray)
        this.setState({ 
          searchTerm: "",
          jokes: jokesArray
        })
      });
  }

  truncJoke(string, charLimit){
    return string.slice(0, charLimit + 1) + "..."
  }

  renderResults(){
    const {jokes} = this.state;
    if(jokes && jokes.length > 0){
      return jokes.map((joke, i)=>{
        let shortJoke = this.truncJoke(joke.value, 50);
        return(
        <div onClick={e=>this.props.toggleModal("info", joke.value)} key={`joke-${i}`}>{shortJoke}</div>
        )
      })
    }
  }

  render() {
    return (
      <div className="page search">
        <label htmlFor="searchBar">Search Bar</label>
        <input value={this.state.searchTerm} id="searchBar" type="text" onChange={e=>{this.handleinputChange(e.target.value)}} placeholder="Search Chuck Norris Joke by Key Word"></input>
        <button className="blue" onClick={e=>{this.handleSubmit()}}>Submit</button>
        <div className="results">
          <h3>Results</h3>
          {this.renderResults()}
        </div>
      </div>
    )
  }
}

export default Search;
