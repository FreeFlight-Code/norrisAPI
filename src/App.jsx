import React from "react";
import Header from "./components/Header";
import Modal from "./components/Modal";
import Pages from "./pages/Pages";

import "./App.scss";
import { connect } from "react-redux";

class App extends React.Component {



  render() {
//Placed Modal before all other Pages/Components to prevent need for z-index in styling
    return (
      <div id="ChuckNorrisApp">
        < Modal />
        < Header />
        < Pages />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(App)