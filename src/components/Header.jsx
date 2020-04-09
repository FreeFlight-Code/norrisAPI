import React from 'react';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from '../redux/user';
import { displayModal } from "../redux/modal";


export class Header extends React.PureComponent {
  constructor(props) {
    super(props);
    this.handleLogInOut = this.handleLogInOut.bind(this);
  }

  handleLogInOut(){
    const {loggedin} = this.props.user;
    if(loggedin){
      document.location = "/";
      this.props.dispatch(logout());
    }else{
      this.props.dispatch(displayModal("You are already logged out, Please Log in to view other Pages."));
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

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(Header);

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
    //#Lists and keys - using keys to create a unique identifier for react to identify components
    //This returns a list of links from the above array
    <>
      {array.map((el, i)=>{
        return <Link key={`nav-link-key-${i}`} to={el.link}>{el.label}</Link>;
      })}
    </>
  )
}

