import { store } from "../store";
import { addJokeToHistory } from "../redux/history";
import { displayModal } from "../redux/modal";

export function handleJokeClick(joke) {
  let tempJoke = joke;
  tempJoke.viewed_at = new Date();
  store.dispatch(displayModal(tempJoke.value));
  store.dispatch(addJokeToHistory(tempJoke));
  return tempJoke;
}
//
export function truncString(string, charLimit) {
  return string.slice(0, charLimit - 3) + "...";
}

export const getJokesBySearchTerm = searchTerm => {
  return fetch(
    `https://api.chucknorris.io/jokes/search?query=${searchTerm}`
  ).then(res => res.json())
  .then(res=>res.result);
};
export const getCategories = _ => {
  return fetch(`https://api.chucknorris.io/jokes/categories`)
    .then( res => res.json());
};
export function getRandomJoke(category) {
  return fetch(`https://api.chucknorris.io/jokes/random?category=${category}`)
    .then(res => res.json())
    .then(joke => {handleJokeClick(joke); return joke});
}
//#Curried function
export const sort = array => (key, reverse) => {
  //#Blocked-scoped variable let 
  //#destructure
  let newList = [...array];
  if (reverse > 0 || reverse === "reverse" || reverse === "reversed"){
    //#Array Functions - sort
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
export function simulatedAuthenticationCall (user) {
  return new Promise((resolve, reject) => {
    //set resolve timeout less if you want auth call to succeed
    if (user === "test"){
      setTimeout(() => {
        reject({message: "User information not valid"});
      }, 1000);
    }
    setTimeout(() => {
      resolve(user);
    }, 2000);
  })
};