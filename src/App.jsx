import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from './components/Header'
import Home from './pages/Home'
import Categories from './pages/Categories'
import Jokes from './pages/Jokes'
import Search from './pages/Search'

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
    const {loggedin} = this.state;

    return (
      <div id="ChuckNorrisApp">
        <Header loggedin={loggedin} />

        <Router>
          {loggedin && (
            <Switch>
              <Route path="/categories">
                <Categories />
              </Route>
              <Route path="/jokes">
                <Jokes />
              </Route>
              <Route path="/search">
                <Search />
              </Route>
            </Switch>
          )}

          <Switch>
            <Route exact path="/">
              <Home loginUser={this.loginUser} />
            </Route>
            <Route path="/">
              <div>404 Page</div>
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
 
function renderModal() {
  const element = (
    <div id="loadingModal">
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById("ChuckNorrisApp"));
}
function removeModal() {
  const element = document.getElementById("loadingModal")
  ReactDOM.unmountComponentAtNode(document.getElementById("ChuckNorrisApp"));
}