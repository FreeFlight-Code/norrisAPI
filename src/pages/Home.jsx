import React from 'react';
import Form from '../components/Form';

class Home extends React.PureComponent {

	render() { 

		return (

      <div className="page home">
		    <Form loginUser={this.props.loginUser}/>
      </div>
    );
	}
}
 
export default Home;