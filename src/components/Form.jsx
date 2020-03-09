import React from 'react';

class Form extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			password: ""
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
		this.togglePasswordvisibility = this.togglePasswordvisibility.bind(this);
	}

	validateEmailAndPassword(email, password) {
		console.log(email, password);
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
		}
	//send email and password
	}

	handleInputChange(e) {
		const { type, value } = e.target;
		console.log(e.target.type, e.target.value);
		let key = e.target.type;
		this.setState({
			[type]: value
		});
	}

	render() {
	const { email, password } = this.state;	
	return (
		<form>
		<label>Email</label>
		<input
			onChange={e => this.handleInputChange(e)}
			// pattern="^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$"
			type="email"
			name="email"
			id="email"
			value={email}
		/>
		<label>Password</label>
		<input
			onChange={e => this.handleInputChange(e)}
			// pattern="(?=.{8,})"
			type="password"
			name="password"
			id="password"
			value={password}
		/>
		<input
			onChange={_ => this.togglePasswordvisibility()}
			type="checkbox"
		/>
		<input
			onClick={e => this.handleSubmit(e)}
			type="submit"
			value="Submit"
		/>
		</form>
	);
  }
}
 
export default Form;