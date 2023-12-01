import React from 'react';

const ViewBudget = (props) => {
	return (
		<>
			<span>Solde : {props.budget}€</span>
			<button type='button' class='btn btn-primary' onClick={props.handleEditClick}>
				Modifier
			</button>
		</>
	);
};

export default ViewBudget;
