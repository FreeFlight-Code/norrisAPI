import React from "react";
import { connect } from "react-redux";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.togglePasswordvisibility = this.togglePasswordvisibility.bind(this);
    // this.validateEmailAndPassword = this.validateEmailAndPassword.bind(this);
    document.addEventListener("keydown", this.validateEmailAndPassword);
  }

  componentWillUnmount() {
    document.removeEventListener("keypress", this.validateEmailAndPassword);
  }

  validateEmailAndPassword = () => {
		  const { email, password } = this.state;
		  const submitButton = document.querySelector("button.submit");
		  if (email && password) {
			if (submitButton.className.indexOf("disabled") > 0) {
			  submitButton.classList.remove("disabled");
			}
		  } else {
			if (submitButton.className.indexOf("disabled") < 0) {
			  submitButton.classList.add("disabled");
			}
		  }
  }

  togglePasswordvisibility() {
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const { email, password } = this.state;
    if (this.validateEmailAndPassword(email, password)) {
      e.target.classList.toggle("disabled");
      this.props.dispatch({ type: "DISPLAY_MODAL" });
      this.props.dispatch({ type: "LOG_IN", password: password, email: email });
      this.setState({
        email: "",
        password: ""
      });
      setTimeout(() => {
        this.props.dispatch({ type: "REMOVE_MODAL" });
      }, 3000);
    }
  }

  handleInputChange({type, value}) {
	  this.setState({
		  [type]: value
		});
	}
	
	render() {
		const { email, password } = this.state;
		console.log(this.state)

    return (
      <form className="loginForm">
        <label>Email</label>
        <input
          onChange={e => this.handleInputChange(e.target)}
          // pattern="^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$"
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
          // pattern="(?=.{8,})"
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
