import React from 'react';
import Header from './My/header'
import ListNav from './My/listNav'
import Clothes from './My/clothes'
import '../style/my/my.css'
class My extends React.Component{
	constructor(){
		super();
	}
	render(){
		return(
			<div className = "my">
				<Header/>
				<ListNav/>
				<Clothes/>
			</div>
		)
	}
}
export default My
