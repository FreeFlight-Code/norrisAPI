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
		//validation checks needed
		return true
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
		const user = {
			email: email,
			password: password
		}
		if (this.validateEmailAndPassword(email, password)) {
			this.props.loginUser(user);
			this.setState({
				email: "",
				password: ""
			})
		}
		
	}

	handleInputChange(e) {
		const { type, value } = e.target;
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
				onChange={e => this.handleInputChange(e)}
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
				onChange={e => this.handleInputChange(e)}
				// pattern="(?=.{8,})"
				type="password"
				name="password"
				id="password"
				value={password}
			/>
			<button
				onClick={e => this.handleSubmit(e)}
				className="blue"
			>
				Submit
			</button>
		</form>
	);
  }
}
 
export default Form;