import React from 'react';
import { Link } from 'react-router-dom';
import '../../style/my/header.css'
class Header extends React.Component{
	constructor(){
		super();
	}
	render(){
		return(
			<div className = "head">
				<div className = "header">
					<a>注册/登录</a>
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
