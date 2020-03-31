import React from "react";
import {
  Route,
  Switch,
  Redirect,
  useLocation
} from "react-router-dom";
import Categories from './Categories';
import Jokes from './Jokes';
import Search from './Search';
import Home from './Home';

// You can use the last <Route> in a <Switch> as a kind of
// "fallback" route, to catch 404 errors.
//
// There are a few useful things to note about this example:
//
// - A <Switch> renders the first child <Route> that matches
// - A <Redirect> may be used to redirect old URLs to new ones
// - A <Route path="*> always matches

export default function Routes() {
  return (

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/categories">
          <Categories />
        </Route>
        <Route exact path="/jokes">
          <Jokes />
        </Route>
        <Route exact path="/search">
          <Search />
        </Route>
        <Route path="/asd">
          <Redirect to="/" />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>

  );
}

function NoMatch() {
  let location = useLocation();

  return (
    <div>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </div>
  );
}
