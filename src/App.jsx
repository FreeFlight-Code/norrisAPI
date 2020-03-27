import React from "react";
import Header from "./components/Header";
import Modal from "./components/Modal";
import Pages from "./pages/Pages";

import "./App.scss";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: { show: false },
      user: { loggedin: false }
    };
    this.loginUser = this.loginUser.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  simulatedAuthenticationCall = new Promise((resolve, reject)=>{
    //set resolve timeout less if you want auth call to succeed
    setTimeout(() => {
        resolve(true)
    }, 6000);
    setTimeout(() => {
        reject("User information not valid")
    }, 7000);
  })

  loginUser(user) {
    let userObj = {
      email: user.email,
      password: user.password,
      loggedin: this.state.user.loggedin
    }
    this.toggleModal();

    this.simulatedAuthenticationCall
      .then(res=>{
        if (res === true){
          userObj.loggedin = true
          this.setState({
            user: {...userObj}
          });
        }
      })
      .catch(err=>console.error("authentication failed... ", err))
      .finally(_=>this.toggleModal())
  }

  toggleModal(type, message) {
    const currentState = this.state.modal.show;
    this.setState({
      modal: {
        show: !currentState,
        message: message ? message : "",
        type: type ? type : ""
      }
    });
  } 

  render() {
    const { modal } = this.state;
    const { loggedin } = this.state.user;
    const show = modal.show;
    return (
      <div id="ChuckNorrisApp">
        {show && <Modal info={modal} close={this.toggleModal} />}
        <Header loggedin={loggedin} />
        <Pages toggleModal={this.toggleModal} loginUser={this.loginUser} />
      </div>
    );
  }
}