import React from 'react';
import Form from '../components/Form';

class Home extends React.PureComponent {

	render() { 

		return (
      <div className="page home">
        <h3>Visit our pages above:</h3>
        <h4>Home Page allows you to log in.</h4>
        <h4>Jokes Page allows you to see the jokes you have viewed.</h4>
        <h4>Categories Page allows you to view the categories of jokes</h4>
		    <h4>Search Page allows you to search jokes by key word.</h4>
        <Form loginUser={this.props.loginUser} />
      </div>
    );
	}
}
 
export default Home;