import React from 'react';
import Header from './MyComponents/header'
import ListNav from './MyComponents/listNav'
import Clothes from './MyComponents/clothes'
import '../style/MyCss/my.css'
import Footer from './Footer'

class My extends React.Component{
	constructor(){
		super();
	}
	render(){
		return(
			<div className = "my">
				<Header/>
				<ListNav/>
				<Footer/>
				<Clothes/>
			</div>
		)
	}
}
export default My
