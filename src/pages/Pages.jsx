import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import Home from "./Home";
import Categories from "./Categories";
import Jokes from "./Jokes";
import Search from "./Search";

class Routes extends React.Component {

  render() {
    const {loggedin} = this.props.user;
    return (
      <Router>
        {loggedin && <Switch>
          <Route component={Categories} path="/categories" />
          <Route component={Jokes} path="/jokes" />
          <Route component={Search} path="/search" />
        </Switch>}
        <Switch>
          <Route component={Home} exact path="/" />
          <Route path="/">
            <div>404 sorry page not found</div>
          </Route>
        </Switch>
      </Router>
    );
  }
}
 

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(Routes);