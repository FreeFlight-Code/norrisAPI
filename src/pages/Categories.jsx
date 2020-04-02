import React from "react";
import {connect} from 'react-redux';
import {store} from '../store'

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



  render() {
    const { categories } = this.state;
    return (
      <div className="page categories">
        <div className="categoryList">
          < CategoriesList categories={categories}/>
        </div>
      </div>
    );
  }
}

export default connect()(Categories);

function CategoriesList({categories}) {
  return categories.map((category, i) => {
    return (
      <div
        className="category"
        onClick={e => {
          getJoke(category);
        }}
        key={`category-${i}`}
      >
        {category}
      </div>
    );
  });
}

function getJoke(category) {
  fetch(`https://api.chucknorris.io/jokes/random?category=${category}`)
    .then(res => res.json())
    .then(joke => {
      let tempJoke = joke;
      tempJoke.viewed_at = new Date();
      store.dispatch({
        type: "ADD_JOKE_TO_HISTORY",
        payload: tempJoke
      });
      store.dispatch({
        type: "DISPLAY_MODAL",
        message: tempJoke.value,
        messageType: "info"
      });
    });
  }