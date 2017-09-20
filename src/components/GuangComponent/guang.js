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
	componentDidMount(){
        // var id= this.props.params.id;        
        // console.log(this.props.match.params.id);
    }
	render(){
		return(
			<div className = "guang">
				<Header/>
				<Introduce flag = {this.props.match.params.id}/>
				<List/>
				<Croll/>
				<Brand/>
			</div>
		)
	}
}
export default Guang
