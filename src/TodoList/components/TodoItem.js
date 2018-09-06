import React from 'react';
import PropTypes from 'prop-types';

const TodoItem = ({text, onClick, completed}) => (
	<div onClick={onClick} style={{textDecoration: completed ? 'line-through' : 'none'}}>
		{text}
	</div>
);

TodoItem.propTypes = {
	text   : PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired,
	completed: PropTypes.bool.isRequired
};

export default TodoItem;
