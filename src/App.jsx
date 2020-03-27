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


  simulatedAuthenticationCall = new Promise((resolve, reject)=>{
    //set resolve timeout less if you want auth call to succeed
    setTimeout(() => {
        resolve(true)
    }, 6000);
    setTimeout(() => {
        reject("User information not valid")
    }, 5000);
  })

  loginUser(user) {
    // const {email, password} = user;
    this.toggleModal();


    this.simulatedAuthenticationCall
      .then(res=>{
        if (res === true){
          this.setState({
            loggedin: true
          });
        }
      })
      .catch(err=>console.error("authentication failed... ", err))
      .finally(_=>this.toggleModal())
  }



  toggleModal(type, message) {
    console.log('toggle')
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
