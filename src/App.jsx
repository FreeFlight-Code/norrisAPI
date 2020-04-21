import React from "react";
//components
import Header from "./components/Header";
import Modal from "./components/Modal";
import Routes from "./pages/Routes";
// styling
import "./App.scss";

class App extends React.Component {

  render() {
//Placed Modal before all other Pages/Components to prevent need for z-index in styling
    return (
      <div id="ChuckNorrisApp">
          < Modal />
          < Header />
          < Routes />
      </div>
    );
  }
}

export default App