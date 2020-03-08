import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from './components/Header'
import Home from './pages/Home'
import Categories from './pages/Categories'
import Jokes from './pages/Jokes'
import Search from './pages/Search'

import './App.scss';

export default class App extends React.Component {

  render() { 
    return (

      <div className='ChuckNorrisApp'>

        <Header />

        <Router>
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
            <Route exact path="/">
              <Home />
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
 