 import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import '../style/Footer.css'
export default class Footer extends React.Component{
	constructor(){
		super()
		this.checked=this.checked.bind(this)
		this.state={
			pathname:""
		}
	}
	componentDidMount(){
		this.state.pathname = window.location.pathname
		this.setState({
			pathname:this.state.pathname
		})
		console.log(this.refs.footerbox.children)
		if(this.state.pathname=="/"){
			this.refs.footerbox.children[0].className="footeractive"
		}else{
			for(var i = 0;i<this.refs.footerbox.children.length;i++){
				if(this.state.pathname.indexOf(this.refs.footerbox.children[i].id)!=-1){
					this.refs.footerbox.children[i].className="footeractive"
				}
			}
		}
	}
	checked(e){
		for(var i = 0;i<e.currentTarget.parentNode.children.length;i++){
			e.currentTarget.parentNode.children[i].className=""
		}
		e.currentTarget.className="footeractive"
		console.log(e.currentTarget)
	}
	render(){
		return(
			<ul id="app_footer" ref="footerbox">
		        <li id="main" onClick={(e)=>this.checked(e)}><Link to="/"><i className="icon iconfont">&#xe625;</i><span>首页</span></Link></li>
		        <li id="kinds" onClick={(e)=>this.checked(e)}><Link to="/kinds"><i className="icon iconfont">&#xe6f5;</i><span>分类</span></Link></li>
		        <li id="goShopping" onClick={(e)=>this.checked(e)}><Link to="/goShopping"><i className="icon iconfont">&#xe6c1;</i><span>逛</span></Link></li>
		        <li id="goodsCar" onClick={(e)=>this.checked(e)}><Link to="/goodsCar"><i className="icon iconfont">&#xe670;</i><span>购物车</span></Link></li>
		        <li id="my" onClick={(e)=>this.checked(e)}><Link to="/my"><i className="icon iconfont">&#xe705;</i><span>我的</span></Link></li>
	        </ul>
		)
	}
}
