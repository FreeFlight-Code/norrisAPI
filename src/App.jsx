import React from 'react';
import ReactDOM from "react-dom";
import Header from './components/Header';
import Pages from './Pages';

import './App.scss';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedin: false,
      loading: false
    };
    this.loginUser = this.loginUser.bind(this);
  }

  loginUser(user){
    const {email, password} = user;
    renderModal();
    if(true){
      setTimeout(() => {
        console.log(`your email is ${email} and your password is ${password}.`)
        removeModal();
        this.setState({
          loggedin: true
        })
        window.location = "/search";
      }, 3000);

    }
  }

  toggleLoadingModal(){
    const loading = this.state;
    this.setState({
      loading: !loading
    })
  }

  render() {
    // console.log(this.state.loggedin, '...am i logged in? App...')
    const {loggedin} = this.state;

    return (
      <div id="ChuckNorrisApp">
        <div id="modal"></div>
        <Header loggedin={loggedin} />
        <Pages loginUser = {this.loginUser}/>
      </div>
    );
  }
}
 
function renderModal() {
  const element = (
    <div className="modal" id="loadingModal">
      <h1>Loading...</h1>
    </div>
  );
  ReactDOM.render(element, document.getElementById("modal"));
}
function removeModal() {
  const element = document.getElementById("modal")
  ReactDOM.unmountComponentAtNode(element);
}