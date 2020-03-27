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
      loggedin: false
    };
    this.loginUser = this.loginUser.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  loginUser(user) {
    // const {email, password} = user;
    this.toggleModal();
    if (true) {
      setTimeout(() => {
        this.toggleModal();
        this.setState({
          loggedin: true
        });
        window.location = "/search";
      }, 3000);
    }
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
    const { loggedin, modal } = this.state;
    const { show } = this.state.modal;
    return (
      <div id="ChuckNorrisApp">
        {show && <Modal info={modal} close={this.toggleModal} />}
        <Header loggedin={loggedin} />
        <Pages toggleModal={this.toggleModal} loginUser={this.loginUser} />
      </div>
    );
  }
}

// function renderModal() {
//   const element = (
//     <div className="modal" id="loadingModal">
//       <h1>Loading...</h1>
//     </div>
//   );
//   ReactDOM.render(element, document.getElementById("modal"));
// }
// function removeModal() {
//   const element = document.getElementById("modal")
//   ReactDOM.unmountComponentAtNode(element);
// }
