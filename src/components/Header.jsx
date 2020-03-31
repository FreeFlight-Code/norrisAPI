import React from 'react';
import { connect } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
  useLocation
} from "react-router-dom";


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
    const { loggedin } = this.props.user;
    return (
      <header>
        <nav>
          <Navlinks />
        </nav>
        <button onClick={e => this.handleLogInOut()} className="loggedin green">
          {loggedin ? "Logged In" : "Logged Out"}
        </button>
        <img
          alt="Chuck norris cartoon"
          src="https://assets.chucknorris.host/img/avatar/chuck-norris.png"
        />
      </header>
    );
  }
}

function Navlinks (){
  const array = [
    {
      link: "/",
      label: "Home"
    },
    {
      link: "/jokes",
      label: "Jokes"
    },
    {
      link: "/categories",
      label: "Categories"
    },
    {
      link: "/search",
      label: "Search"
    }
  ];
  return (
    <>
      {array.map((el, i)=>{
        return <Link key={`nav-link-key-${i}`} to={el.link}>{el.label}</Link>;
      })}
    </>
  )
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(Header);