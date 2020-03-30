import React from "react";
import Header from "./components/Header";
import Modal from "./components/Modal";
import Pages from "./pages/Pages";

import "./App.scss";
import { connect } from "react-redux";

class App extends React.Component {

  // simulatedAuthenticationCall = new Promise((resolve, reject)=>{
  //   //set resolve timeout less if you want auth call to succeed
  //   setTimeout(() => {
  //       resolve(true)
  //   }, 6000);
  //   setTimeout(() => {
  //       reject("User information not valid")
  //   }, 7000);
  // })

  // loginUser(user) {
  //   let userObj = {
  //     email: user.email,
  //     password: user.password,
  //     loggedin: this.state.user.loggedin
  //   }
  //   this.toggleModal();

  //   this.simulatedAuthenticationCall
  //     .then(res=>{
  //       if (res === true){
  //         userObj.loggedin = true
  //         this.setState({
  //           user: {...userObj}
  //         });
  //       }
  //     })
  //     .catch(err=>console.error("authentication failed... ", err))
  //     .finally(_=>this.toggleModal())
  // }

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