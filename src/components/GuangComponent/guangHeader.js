import React from 'react';
import '../../style/GuangCss/guangHeader.css'
import { Link } from 'react-router-dom';
class Header extends React.Component {
	constructor() {
		super();
		this.show = this.show.bind(this);
		this.state = { flag: false }
	}
	show() {
		this.setState({
			flag: !this.state.flag
		})
	}
	render() {
		return (
			<div className="header-Box">
				<div className="header">
					<Link to="/goShopping"><i className="iconfont iconfont-arrow2-left"></i></Link>
					<span>逛</span>
					<a onClick={this.show}><i className="iconfont iconfont-menu"></i></a>
				</div>
				<div className = "show-nav"  style={this.state.flag ? { display: "block" } : { display: "none" }}>
					<ul className="header-nav">
						<li><Link to="/"><i className="icon iconfont">&#xe625;</i><span>首页</span></Link></li>
						<li><Link to="/kinds"><i className="icon iconfont">&#xe6f5;</i><span>分类</span></Link></li>
						<li><Link to="/goodsCar"><i className="icon iconfont">&#xe670;</i><span>购物车</span></Link></li>
						<li><Link to="/my"><i className="icon iconfont">&#xe705;</i><span>我的</span></Link></li>
					</ul>
				</div>
				<div className = "header-person">
					<img src = "//img10.static.yhbimg.com/author/2017/05/23/15/0187de3b3addb51377dcb272d44ed29dff.jpg?imageView2/2/interlace/1/q/60" alt = ""/>
					<span className = "person-txt1">达达</span>
					<span className = "person-txt2">根正苗红</span>
				</div>
			</div>
		)
	}
}
export default Header 
