import React, { useState, useEffect } from "react";
import { getCategories, getRandomJoke } from "../js";

//#functional component
function Categories () {
//#hooks #useState #useEffect
    const [categories, setCategories] = useState([]);
    useEffect( () => {
      getCategories()
      .then( res => setCategories(res));
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

export function CategoriesList({categories}) {
  //#map
  return categories.map((category, i) => {
    //#JSX returned
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