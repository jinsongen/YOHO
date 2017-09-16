import React from 'react';
import '../../style/GuangCss/guang.css'
import Header from './guangHeader'
import Introduce from './guangIntroduce'
import List from './guangList'
import Croll from './guangCroll'
class Guang extends React.Component{
	constructor(){
		super();
	}
	render(){
		return(
			<div className = "guang">
				<Header/>
				<Introduce/>
				<List/>
				<Croll/>
			</div>
		)
	}
}
export default Guang
