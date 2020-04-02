import React, { useState, useEffect } from "react";
import { getCategories, getRandomJoke } from "../js";

function Categories () {

    const [categories, setCategories] = useState([]);
    useEffect( () => {
      getCategories()
      .then(res=>setCategories(res));
    }, []);

    return (
      <div className="page categories">
        <div className="categoryList">
          < CategoriesList categories={categories}/>
        </div>
      </div>
    );
}

export default Categories;

function CategoriesList({categories}) {
  return categories.map((category, i) => {
    return (
      <div
        className="category"
        onClick={ _ => getRandomJoke(category)}
        key={`category-${i}`}
      >
        {category}
      </div>
    );
  });
}