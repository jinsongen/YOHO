import React from 'react';
import '../../style/GuangCss/guang.css'
import Header from './guangHeader'
import Introduce from './guangIntroduce'
import List from './guangList'
import Croll from './guangCroll'
import Brand from './guangBrand'
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
				<Brand/>
			</div>
		)
	}
}
export default Guang
