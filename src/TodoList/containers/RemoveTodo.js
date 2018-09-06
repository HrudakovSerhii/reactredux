import React from 'react';
import {connect} from 'react-redux';
import {removeTodo} from '../actions/index';

const RemoveTodo = ({dispatch, id}) => {
	return (
		<div>
			<form onSubmit={e => {
				e.preventDefault();

				dispatch(removeTodo(id));
			}}>
				<button type="submit">Remove Todo</button>
			</form>
		</div>
	);
};

export default connect()(RemoveTodo);
