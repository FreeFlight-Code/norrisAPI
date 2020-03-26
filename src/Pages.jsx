import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import Jokes from "./pages/Jokes";
import Search from "./pages/Search";

export default class Routes extends React.Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/categories">
            <Categories />
          </Route>
          <Route path="/jokes">
            <Jokes />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route exact path="/">
            <Home loginUser={this.props.loginUser} />
          </Route>
          <Route path="/">
            <div>404 sorry page not found</div>
          </Route>
        </Switch>
      </Router>
    );
  }
}
