import React from 'react';
import TodoItem from './TodoItem';
import RemoveTodoButton from '../containers/RemoveTodo';
import PropTypes from 'prop-types';

const Todo = ({onClick, completed, text, id}) => (
	<li>
		<TodoItem text={text} onClick={onClick} completed={completed}/>
		<RemoveTodoButton id={id}/>
	</li>
);

Todo.propTypes = {
	onClick  : PropTypes.func.isRequired,
	completed: PropTypes.bool.isRequired,
	text     : PropTypes.string.isRequired,
	id       : PropTypes.number.isRequired
};

export default Todo;
