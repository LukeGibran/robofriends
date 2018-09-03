import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, combineReducers,compose} from 'redux';
import {createLogger} from 'redux-logger';
import './index.css';
import thunkMiddleware from 'redux-thunk'
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';
import {searchRobots, requestRobots} from './reducers';

const logger = createLogger();
const rootReducer = combineReducers({searchRobots,requestRobots})
const store = createStore(rootReducer,
	compose(
	applyMiddleware(thunkMiddleware, logger),
	window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()
		   )
	)

ReactDOM.render(
				<Provider store={store}>
				<App/> 
				</Provider>,
				document.getElementById('root'));
registerServiceWorker();
