import React from 'react';
import { connect } from "react-redux";


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogInOut = this.handleLogInOut.bind(this);
  }

  handleLogInOut(){
    const {dispatch} = this.props;
    const {loggedin} = this.props.user;
    if(loggedin){
      document.location = "/";
      dispatch({type: "LOG_OUT"});
    }else{
      dispatch({type: "DISPLAY_MODAL", message: "You are already logged out, Please Log in to view other Pages.", messageType: "info"})
    }
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
          <button onClick={e => this.handleLogInOut()} className="loggedin green">
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