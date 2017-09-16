import React from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import "../style/Maincss/main.css"
//@import 'nprogress/nprogress';
import LunBo from './MainComponents/Lunbo'
import Active from './MainComponents/Active'
import MainKinds from './MainComponents/MainKinds'
import LunBo2 from './MainComponents/Lunbo2'
import HotBrand from './MainComponents/HotBrand'
import Scroll from './MainComponents/Scroll'
import MybeLike from './MainComponents/MybeLike'
 import Footer from './Footer'
//import Drawer from './MainComponents/Drawer'
class MainUI extends React.Component{
	constructor(){
		super();
	}
	componentDidMount() {
		this.props.fetchListData();
	}
	render(){
		return(
			<div id="main_wrap">
				<header>
					<span className="iconfont icon">&#xe667;</span>
					<h3>YaoHe!</h3>
					<span className="iconfont icon">&#xe665;</span>
				</header>
				<LunBo/>
				<Active/>
				<MainKinds/>
				<LunBo2/>
				<HotBrand/>
				<Scroll/>
				<MybeLike/>
				<Footer/>
			</div>
		)
	}
}
const mapState2Props = (state) => {
	return {
		main_list: state.main_list
	}
}

const mapDispatch2Props = (dispatch) => {
	return {
		fetchListData: () => {
			fetch("/api/getdata").then((res)=>{
				return res.json();
			}).then((json)=>{
				dispatch({
					type: "MAIN",
					payload: json
				})
			})
		}
	}
}

const Main = connect(mapState2Props, mapDispatch2Props)(MainUI);
export default Main
