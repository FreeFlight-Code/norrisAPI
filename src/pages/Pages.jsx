import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Categories from "./Categories";
import Jokes from "./Jokes";
import Search from "./Search";

export default class Routes extends React.Component {

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/categories">
            <Categories toggleModal={this.props.toggleModal} />
          </Route>
          <Route path="/jokes">
            <Jokes toggleModal={this.props.toggleModal} />
          </Route>
          <Route path="/search">
            <Search toggleModal={this.props.toggleModal} />
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
