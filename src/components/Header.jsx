import React from 'react';
import { connect } from "react-redux";


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogInOut = this.handleLogInOut.bind(this);
  }

  handleLogInOut(){
    // const {loggedin} = this.props;
    // if (loggedin){
    //   //log out
    // } else {
    //   document.location = "/";
    // }
  }

  render() {
    // console.log(this.props, ' ...props-header')
    const { loggedin } = this.props.user;
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
          <button onClick={e => this.handleLogInOut()} className="loggedin">
            {loggedin ? "Logged In" : "Logged Out"}
          </button>
          <img
            alt="Chuck norris cartoon"
            style={{ width: "50px" }}
            src="https://assets.chucknorris.host/img/avatar/chuck-norris.png"
          />
        </nav>
      </header>
    );
  }
}
 

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(Header);