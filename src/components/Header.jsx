import React from 'react';

class Header extends React.Component {

	render() { 
		const {loggedin} = this.props;
		return (
			<header>
				<nav>
					<span className="loggedin">{loggedin ? "Logged in" : "Not logged in"}</span>
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