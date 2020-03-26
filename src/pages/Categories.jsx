import React from "react";

class Categories extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      currentJoke: "No Current Joke Selected.",
      categories: []
    };
  }

  componentDidMount() {
    fetch("https://api.chucknorris.io/jokes/categories")
      .then(res => res.json())
      .then(categories => this.setState({ categories: categories }));
  }

  categoriesList() {
    const { categories } = this.state;
    return categories.map((category, i) => {
      return (
        <div
          className="category"
          onClick={e => {
            this.getJoke(category);
          }}
          key={`category-${i}`}
        >
          {category}
        </div>
      );
    });
  }
  getJoke(category) {
    if (category) {
      fetch(
        `https://api.chucknorris.io/jokes/random?category=${category}`
      )
        .then(res => res.json())
        .then(joke => {
          console.log(joke);
          this.setState({ currentJoke: joke.value });
        });
    }
    return this.state.currentJoke;
  }

  render() {
    return (
      <div className="page categories">
        <div className="categoryList">{this.categoriesList()}</div>
        {this.getJoke()}
      </div>
    );
  }
}

export default Categories;
