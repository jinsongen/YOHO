import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {connect, Provider} from "react-redux";
import {createStore, combineReducers,applyMiddleware} from 'redux';
//import thunk from 'redux-thunk';

import detailreducer from './reducers/DetailReducer'
import goshopreducer from './reducers/GoShoppingReducers'


const reducers = combineReducers({
	detail_list:detailreducer,
	goShopping:goshopreducer
})

// 创建store
const store = createStore(reducers,{detail_list:[]});

const renderPage = () => {
	ReactDOM.render(
		<Provider store={store}>
			<App />
		</Provider>, document.getElementById('root'));
}

renderPage();

// 订阅
store.subscribe(renderPage);


