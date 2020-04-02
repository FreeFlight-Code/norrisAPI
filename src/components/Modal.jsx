import React from "react";
import {connect} from 'react-redux';
import {removeModal} from '../redux/modal';

function Modal (props) {
	// console.log(props, "...", this.props)
	const {message, messageType, show} = props.modal;

	if(show){
		return (
			<div className="modal" onClick={e=>{props.dispatch(removeModal());}}>
				<div className={messageType}>
					{message ? message :
					<img alt="animated loading gif" src="https://i.pinimg.com/originals/a2/dc/96/a2dc9668f2cf170fe3efeb263128b0e7.gif"/>
					}
				</div>
			</div>
		);

	} else {
		return null
	}
}


const mapStateToProps = state => {
  return {
    modal: state.modal
  };
};

export default connect(mapStateToProps)(Modal);
