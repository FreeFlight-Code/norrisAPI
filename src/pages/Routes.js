import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { connect } from "react-redux";
//components
import Categories from "./Categories";
import Jokes from "./Jokes";
import Search from "./Search";
import Home from "./Home";

//#functional component
function Routes(props) {
  //#destructuring #Blocked-scoped variable const
  const { loggedin } = props;
  return (
    <>
      {/* #routes React routing */}
      {loggedin && ( //secured paths only
        <Switch>
          <Route exact path="/categories">
            <Categories />
          </Route>
          <Route exact path="/jokes">
            <Jokes />
          </Route>
          <Route exact path="*">
            <Search />
          </Route>
        </Switch>
      )}

      {!loggedin && ( // non-secured paths only
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      )}
    </>
  );
}

function NoMatch() {
  let location = useLocation();

  return (
    <div className="page">
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
      <h3>Please login to access secure routes or check your url.</h3>
    </div>
  );
}

const mapStateToProps = state => ({
  loggedin: state.user.loggedin
});

export default connect(mapStateToProps)(Routes);
