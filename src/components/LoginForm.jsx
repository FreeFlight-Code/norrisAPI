import React from "react";
import { connect } from "react-redux";
import { removeModal, displayModal } from "../redux/modal";
import { login } from "../redux/user";

//#class components
class LoginForm extends React.Component {
  //#props
  constructor(props) {
    super(props);
    //#state
    this.state = {
      email: "",
      password: ""
    };
    document.addEventListener("keyup", this.validateEmailAndPassword);
  }
  //#lifecycle method
  componentWillUnmount () {
    document.removeEventListener("keyup", this.validateEmailAndPassword);
  }
  //#arrow function / fat arrow
  validateEmailAndPassword = () => {
    const emailRegex = new RegExp(
      "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$"
    );
    const passwordRegex = new RegExp("^[a-zA-Z0-9]{6,10}$");
    const { email, password } = this.state;
    const submitButton = document.querySelector("button.submit");
    if (emailRegex.test(email) && passwordRegex.test(password)) {
      if (submitButton.className.indexOf("disabled") > 0) {
        submitButton.classList.remove("disabled");
      }
    } else {
      if (submitButton.className.indexOf("disabled") < 0) {
        submitButton.classList.add("disabled");
      }
    }
  };

  togglePasswordvisibility = () => {
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    const { email, password } = this.state;
    const user = {email, password};
    this.props.dispatch(displayModal());
    this.props.dispatch(login(user));
    this.setState({
      email: "",
      password: ""
    });
    //#settimeout #closure
    setTimeout(() => {
      this.props.dispatch(removeModal());
    }, 3000);
  }
  //#destructuring
  handleInputChange = ({ type, value }) => {
    this.setState({
      [type]: value
    });
  }

  render() {
    //#block scoped variable const
    const { email, password } = this.state;

    return (
      <form className="loginForm">
        <label>Email</label>
        <input
          onChange={e => this.handleInputChange(e.target)}
          type="email"
          name="email"
          id="email"
          value={email}
        />
        <span className="passwordContainer">
          <label>Password</label>
          <input
            onChange={_ => this.togglePasswordvisibility()}
            type="checkbox"
          />
        </span>
        <input
          onChange={e => this.handleInputChange(e.target)}
          type="password"
          name="password"
          id="password"
          value={password}
        />
        <button
          onClick={e => this.handleSubmit(e)}
          className="submit blue glow disabled"
        >
          Submit
        </button>
      </form>
    );
  }
}
//#currying curried function
export default connect()(LoginForm);
