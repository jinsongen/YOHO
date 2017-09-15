import React from 'react';
import Header from './MyComponents/header'
import ListNav from './MyComponents/listNav'
import Clothes from './MyComponents/clothes'
import '../style/MyCss/my.css'
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
