import React from "react";
import { connect } from "react-redux";
import { removeModal, displayModal } from "../redux/modal";
import { login } from "../redux/user";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    document.addEventListener("keyup", this.validateEmailAndPassword);
  }

  componentWillUnmount() {
    document.removeEventListener("keyup", this.validateEmailAndPassword);
  }

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
    setTimeout(() => {
      this.props.dispatch(removeModal());
    }, 3000);
  }

  handleInputChange = ({ type, value }) => {
    this.setState({
      [type]: value
    });
  }

  render() {
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

export default connect()(LoginForm);
