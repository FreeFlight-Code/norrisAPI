import React from "react";

function Modal (props) {

	const {message, type} = props.info;


	return (
		<div className="modal" onClick={e=>{props.close()}}>
			<div className={type}>
				{message ? message :
				<img alt="animated loading gif" src="https://i.pinimg.com/originals/a2/dc/96/a2dc9668f2cf170fe3efeb263128b0e7.gif"/>
				}
			</div>
		</div>
	);
}

export default Modal;
