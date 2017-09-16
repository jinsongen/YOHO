import React from 'react';
import "../style/GoodsCar/goodscar.css"
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import "../style/GoodsCar/carbox.css"

import CarBox from './GoodscarComponents/CarBox'
import Recommend from './GoodscarComponents/Recommend'
class GoodsCar extends React.Component{
	constructor(){
		super();
		this.state={
			isLogin:"true",//是否登录
			isGoods:"true",//购物车是否有货物
			compile:"",//是否编辑的类名
			compiletext:"编辑"
		}
	}
	compile(){
		console.log(123)
		if(this.state.compile==""){
			this.state.compile = "compile";
			this.state.compiletext="完成";
			this.setState({
				compile:this.state.compile,
				compiletext:this.state.compiletext
			})
		}else{
			this.state.compile = "";
			this.state.compiletext="编辑";
			this.setState({
				compile:this.state.compile,
				compiletext:this.state.compiletext
				
			})
		}
	}
	check(e){
		if(e.currentTarget.className=="checked"){
			e.currentTarget.className="nochecked"
		}else{
			e.currentTarget.className="checked"
		}
		console.log(e.currentTarget.className)
		
	}
	render(){
		return(
			<div id="GoodsCar-wrap">
				<div className="goodscar-header">
					<Link className="goodscar-back icon iconfont" to="/">
						&#xe67d;
					</Link>
					<p className="goodscar-title">购物车</p>
					<span className={"goods" + this.state.isGoods} onClick={this.compile.bind(this)}>{this.state.compiletext}</span>
				</div>
				<div id="goodscar-box" className={"goodscar-box "+this.state.compile}>
				<p className={"goodscar-plslog login" + this.state.isLogin}>
					<span className="iconfont">
						&#xe6e0;
					</span>请您先
					<Link to="/">登陆</Link>
					可以同步电脑和手机中的商品
				</p>
				<div className={"goodscar-empybox em" + this.state.isGoods}>
					<span className="iconfont">&#xe673;</span>
					<p>您的购物车暂无商品</p>
					<Link to="/">随便逛逛</Link>
				</div>
				<div className={"goodscar-isgoodbox gd" + this.state.isGoods}>
					<dl>
						<dt>已免运费(不含顺丰速运)</dt>
						<dd>
							 <div className="checkbox iconfont">
							 	<span className="checked" onClick={this.check.bind(this)}></span>
							 </div>
							 
								 <div className="goods-info">
								 	<Link to="/" className="imgbox">
								 		<img src="//img10.static.yhbimg.com/goodsimg/2017/08/18/14/01d151c110aee36f77cb2a2cff9195c08d.jpg?imageMogr2/thumbnail/120x160/extent/120x160/background/d2hpdGU=/position/center/quality/60/format/webp"/>
								 	</Link>
								 	<div className="nocompile">
								 		<Link to="/" className="title">:CHOCOOLATE  多口袋工装束口裤</Link>
								 		<p className="message">
								 			<span className="color">颜色:黑色</span>
								 			<span className="size">尺码:L</span>
								 		</p>
								 		<p className="price">123</p>
								 	</div>
								 	<div className="iscompile">
								 		<div className="btnbox">
								 			<div className="btn">
									 			<span className="addcount">－</span>
										 		<span className="num">1</span>
										 		<span className="subcount">＋</span>
									 		</div>
									 		<div className="message">
									 			<span>颜色:黑色 尺码:L</span>
									 			<i className="iconfont">&#xe6d5;</i>
									 		</div>
								 		</div>
								 		<p className="price">123</p>
								 	</div>
								 	<div className="count">×1</div>
								 </div>
						</dd>
					</dl>
				</div>
			</div>
				<Recommend/>
				<div id="goodscar-footer" className={this.state.compile+"footer goodscar-footer"}>
					<div className="checkbox iconfont">
					 	<span className="checked" onClick={this.check.bind(this)}></span>
					 	<span>全选</span>
					 </div>
					 <div className="car-allprice">
					 	<p className="price">总计:¥49.00&nbsp;&nbsp;(1件)</p>
					 	<p className="intro">不含运费</p>
					 </div>
					 <div className="car-compilebtn">
					 	<button className="car-collectbtn">移入收藏夹</button>
					 </div>
					 <button className="car-setbtn"></button>
				</div>
				
			</div>
		)
	}
}
export default GoodsCar
