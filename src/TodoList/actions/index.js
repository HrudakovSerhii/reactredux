export const addTodo = (text, id) => {
	return ({
		type: 'ADD_TODO',
		id  : id,
		text
	});
};

export const removeTodo = id => {
	return ({
		type: 'REMOVE_TODO',
		id
	});
};

export const setVisibilityFilter = filter => ({
	type: 'SET_VISIBILITY_FILTER',
	filter
});

export const toggleTodo = id => ({
	type: 'TOGGLE_TODO',
	id
});

export const VisibilityFilters = {
	SHOW_ALL      : 'SHOW_ALL',
	SHOW_COMPLETED: 'SHOW_COMPLETED',
	SHOW_ACTIVE   : 'SHOW_ACTIVE'
};
