import React from 'react';
import {render} from 'react-dom';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';

import registerServiceWorker from './registerServiceWorker';

import App from './App';
import TodoReducer from './TodoList/reducers';
import LoginReducer from './Login/reducers';

const RootReducer = combineReducers({
	LoginReducer,
	TodoReducer
});

const store = createStore(RootReducer);

render(
	<Provider store={store}>
		<App/>
	</Provider>,
	document.getElementById('root')
);

registerServiceWorker();
