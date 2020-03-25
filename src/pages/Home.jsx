import React from 'react';
import Form from '../components/Form';

class Home extends React.Component {

	render() { 
		console.log(this.props, '  home')
		return (

      <div className="page home">
        Home Page
		    <Form loginUser={this.props.loginUser}/>
      </div>
    );
	}
}
 
export default Home;