import React from 'react';
import Form from '../components/Form';

class Home extends React.Component {
	constructor(props) {
		super(props);

	}

	render() { 

		console.log(this.state)
		return (
      <div>
        Home Page
		<Form/>
      </div>
    );
	}
}
 
export default Home;