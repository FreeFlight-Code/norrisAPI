import React from "react";
import {connect} from 'react-redux';

class Categories extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
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
      fetch(`https://api.chucknorris.io/jokes/random?category=${category}`)
        .then(res => res.json())
        .then(joke => {
          let tempJoke = joke;
          tempJoke.viewed_at = new Date();
          this.props.dispatch({
            type: "ADD_JOKE_TO_HISTORY",
            payload: tempJoke
          });
          this.props.dispatch({
            type: "DISPLAY_MODAL",
            message: tempJoke.value,
            messageType: "info"
          });
        });
    }
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

export default connect()(Categories);
