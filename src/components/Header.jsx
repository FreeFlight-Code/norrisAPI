import React from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';

class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {  }
	}


	render() { 
		return (
			<header>
				<nav>
					<a href="/"><span>Home</span></a>
					<a href="jokes"><span>Jokes</span></a>
					<a href="categories"><span>Categories</span></a>
					<a href="search"><span>Search</span></a>
				</nav>
			</header>
    );
	}
}
 
export default Header;