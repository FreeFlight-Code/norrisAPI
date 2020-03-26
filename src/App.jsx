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
        <div id="modal"></div>
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
    <div className="modal" id="loadingModal">
      <h1>Loading...</h1>
    </div>
  );
  ReactDOM.render(element, document.getElementById("modal"));
}
function removeModal() {
  const element = document.getElementById("loadingModal")
  ReactDOM.unmountComponentAtNode(document.getElementById("modal"));
}