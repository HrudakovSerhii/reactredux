import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {addTodo} from '../actions/index';

class AddTodo extends Component {
	handleOnClick = event => {
		event.preventDefault();

		if (!this.input.value.trim()) {
			return;
		}

		this.props.addNewTodo(this.input.value, this.props.todoLength);
		this.input.value = '';
	};

	render() {
		return (
			<div className="addTodo_c">
				<input ref={el => {this.input = el; return this.input}}/>
				<button onClick={this.handleOnClick}>
					Click
				</button>
				<div>{this.props.todoLength}</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		todoLength: state.TodoReducer.todos.length
	};
};

const mapDispatchToProps = dispatch => {
	return {
		addNewTodo: (name, id) => {
			dispatch(addTodo(name, id));
		}
	};
};

AddTodo.propTypes = {
	addNewTodo: PropTypes.func.isRequired,
	todoLength: PropTypes.number.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
