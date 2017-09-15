import React from 'react';
import { Link } from 'react-router-dom';
import '../../style/MyCss/header.css'
class Header extends React.Component{
	constructor(){
		super();
	}
	render(){
		return(
			<div className = "head">
				<div className = "header">
					<Link to = "/login">注册/登录</Link>
				</div>
				<div className = "nav">
					<a>收藏的商品</a>
					<div className = "spacer"></div>
					<a>收藏的品牌</a>
					<div className = "spacer"></div>
					<a>浏览记录</a>
				</div>	
			</div>
		)
	}
}
export default Header
