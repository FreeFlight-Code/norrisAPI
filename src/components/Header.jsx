import React from 'react';

class Header extends React.Component {

	render() { 
		return (
      <header>
        <nav>
          <a href="/">
            <span>Home</span>
          </a>
          <a href="jokes">
            <span>Jokes</span>
          </a>
          <a href="categories">
            <span>Categories</span>
          </a>
          <a href="search">
            <span>Search</span>
          </a>
          {/* <span className="loggedin">{!loggedin ? "Log in" : "Log out"}</span> */}
          <img alt="Chuck norris cartoon" style={{width: "50px"}} src="https://assets.chucknorris.host/img/avatar/chuck-norris.png"/>
        </nav>
      </header>
    );
	}
}
 
export default Header;