import { store } from "../store";
import { addJokeToHistory } from "../redux/history";
import { displayModal } from "../redux/modal";

export function handleJokeClick(joke) {
  let tempJoke = joke;
  tempJoke.viewed_at = new Date();
  store.dispatch(displayModal( tempJoke.value ));
  store.dispatch(addJokeToHistory( tempJoke ));
}
//
export function truncString(string, charLimit) {
  return string.slice(0, charLimit + 1) + "...";
}

export const getJokesBySearchTerm = searchTerm => {
  return fetch(
    `https://api.chucknorris.io/jokes/search?query=${searchTerm}`
  ).then(res => res.json());
};
export const getCategories = _ => {
  return fetch(`https://api.chucknorris.io/jokes/categories`).then(res =>
    res.json()
  );
};
export function getRandomJoke(category) {
  fetch(`https://api.chucknorris.io/jokes/random?category=${category}`)
    .then(res => res.json())
    .then(joke => handleJokeClick(joke));
}
//#Curried function
export const sort = array => (key, reverse) => {
  let newList = array;
  if (reverse === 1 || reverse === "reverse") {
    newList.sort((a, b) => {
      if (a[key] < b[key]) {
        return 1;
      }
      if (a[key] > b[key]) {
        return -1;
      }
      return 0;
    });
  } else {
    newList.sort((a, b) => {
      if (a[key] > b[key]) {
        return 1;
      }
      if (a[key] < b[key]) {
        return -1;
      }
      return 0;
    });
  }
  return newList;
};
