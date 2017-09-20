import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {createStore, combineReducers,applyMiddleware} from 'redux';
import {connect, Provider} from "react-redux";
// import thunk from 'redux-thunk';

import reducersObj from './reducers/index'


const reducers = combineReducers(reducersObj)

// 创建store
const store = createStore(reducers);

const renderPage = () => {
	ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
}

renderPage();

// 订阅
store.subscribe(renderPage);

registerServiceWorker();
