import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';  
import '../../style/MyCss/header.css'
class Header extends React.Component{
	constructor(){
		super();
		this.signOut = this.signOut.bind(this);
		console.log(localStorage.getItem("info"))
		if(localStorage.getItem("info") !== null){
			var cook = localStorage.getItem("info");
			cook = JSON.parse(cook);
			// console.log(1);
			this.state = {
				flag:cook.flag,
				msg:cook.msg
			}
		}else{
			this.state = {
				flag:0,
				msg:""
			}
			// console.log(2);
		}
		
	}
	signOut(){
		localStorage.clear();
		window.location = "/"
	}
	render(){
		return(
			<div className = "head">
				<div className = "header">
				
					<Link to = "/login" style = {this.state.flag==1?{display:"none"}:{display:"block"}}>注册/登录</Link>
					<div className = "header-Info" style = {this.state.flag==0?{display:"none"}:{display:"block"}}>
						<span className = "header-pic"></span>
						<span className = "header-pho">{this.state.msg}</span>
						<span className = "header-signOut" onClick = {this.signOut}>退出</span>
					</div>
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
