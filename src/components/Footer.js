 import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import '../style/Footer.css'
export default class Footer extends React.Component{
	render(){
		return(
			<ul id="app_footer">
		        <li><Link to="/"><i className="icon iconfont">&#xe625;</i><span>首页</span></Link></li>
		        <li><Link to="/kinds"><i className="icon iconfont">&#xe6f5;</i><span>分类</span></Link></li>
		        <li><Link to="/goShopping"><i className="icon iconfont">&#xe6c1;</i><span>逛</span></Link></li>
		        <li><Link to="/goodsCar"><i className="icon iconfont">&#xe670;</i><span>购物车</span></Link></li>
		        <li><Link to="/my"><i className="icon iconfont">&#xe705;</i><span>我的</span></Link></li>
	        </ul>
		)
	}
}
