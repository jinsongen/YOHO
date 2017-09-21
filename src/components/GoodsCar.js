import React from 'react';
import "../style/GoodsCar/goodscar.css"
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import "../style/GoodsCar/carbox.css"

import CarBox from './GoodscarComponents/CarBox'
import Recommend from './GoodscarComponents/Recommend'
class GoodsCar extends React.Component {
	constructor() {
		super();
		this.subcount = this.subcount.bind(this)
		this.addcount = this.addcount.bind(this)
		this.remove = this.remove.bind(this)
		this.checkall = this.checkall.bind(this)
		this.addall = this.addall.bind(this)
		this.check = this.check.bind(this)
		this.state = {
			isLogin: "true", //是否登录
			isGoods: "false", //购物车是否有货物
			compile: "", //是否编辑的类名
			compiletext: "编辑",
			allprice: 0,
			allnum: 0,
			detail_list: []
		}

	}
	addcount(e) {
		this.state.detail_list[e.currentTarget.id].num++
			this.state.allnum = this.state.allnum + 1
		this.state.allprice = this.state.allprice + this.state.detail_list[e.currentTarget.id].price
		this.setState({
			detail_list: this.state.detail_list,
			allnum: this.state.allnum,
			allprice: this.state.allprice
		})
	}
	subcount(e) {
		if(this.state.detail_list[e.currentTarget.id].num == 1) {
			return
		}
		this.state.detail_list[e.currentTarget.id].num--
			this.state.allnum = this.state.allnum - 1

		this.state.allprice = this.state.allprice - this.state.detail_list[e.currentTarget.id].price
		this.setState({
			detail_list: this.state.detail_list,
			allnum: this.state.allnum,
			allprice: this.state.allprice
		})
	}
	compile() {
		if(this.state.compile == "") {
			this.state.compile = "compile";
			this.state.compiletext = "完成";
			this.setState({
				compile: this.state.compile,
				compiletext: this.state.compiletext
			})
		} else {
			this.state.compile = "";
			this.state.compiletext = "编辑";
			this.setState({
				compile: this.state.compile,
				compiletext: this.state.compiletext

			})
		}
	}
	check(e) {
		var index = e.currentTarget.id
		if(e.currentTarget.className == "checked") {
			e.currentTarget.className = "nochecked"
			this.refs.checkall.className = "nochecked"
			this.addall()
		} else {
			e.currentTarget.className = "checked"
			this.addall()
			
			for(var key in this.refs) {
				if(this.refs[key].id){
					if(this.refs[key].className=="nochecked"){
						this.refs.checkall.className="nochecked"
						
						return	
					}else{
						this.refs.checkall.className="checked"
					}

				}
			}

		}
		//		console.log(e.currentTarget.className)

	}
	checkall(e) {
		if(e.currentTarget.className == "checked") { //全不选
			e.currentTarget.className = "nochecked"
			for(var key in this.refs) {
				if(this.refs[key].id){
					this.refs[key].className="nochecked"
				}
			}
			this.addall()

		} else {
			e.currentTarget.className = "checked"
			for(var key in this.refs) {
				if(this.refs[key].id){
					this.refs[key].className="checked"
				}
			}
			this.addall()

		}
	}
	addall() {
		console.log(this.refs)
		var allprice = 0;
		var allnum = 0;
		if(this.state.detail_list.length==0){
			allprice = 0;
			allnum = 0;
			this.state.isGoods="false"
		}else{
			this.state.isGoods="true"
			for(var key in this.refs) {
				if(this.refs[key].id){
					if(this.refs[key].className=="checked"){
						var index = this.refs[key].id
						allprice += Number(this.state.detail_list[index].price)*Number(this.state.detail_list[index].num)
						allnum += Number(this.state.detail_list[index].num)
					}
				}
			}
		}
		
		this.state.allprice = allprice
		this.state.allnum = allnum
		this.setState({
			allprice: this.state.allprice,
			allnum: this.state.allnum
		})
	
	}
	remove() {
		var removed = 0;
		for(var key in this.refs) {
			if(this.refs[key].id){
				if(this.refs[key].className=="checked"){
					var index = this.refs[key].id
					console.log(index)
					this.state.detail_list.splice(index-removed,1)
					removed++
					console.log(this.state.detail_list)
				}

			}
		}
//		for(var key in this.refs) {
//			if(this.refs[key].id){
//				this.refs[key].className="nochecked"
//			}
//		}
		this.addall()
		this.setState({
			detail_list:this.state.detail_list
		})
	}
	componentDidMount() {
		if(localStorage.getItem("info") !== null){
			this.state.isLogin="true"
			if(this.props.detail_list.length == 0) {
				this.state.isGoods = false
				this.setState({
					isGoods: this.state.isGoods
				})
			}else{
				this.state.detail_list = this.props.detail_list
				this.setState({
					detail_list: this.state.detail_list
				})
				console.log(this.state.detail_list)
			}
		}else{
			this.state.isLogin="false"
			
			// console.log(2);
		}
		

	}
	render() {
		//		console.log(this.props.detail_list)
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
						{
							this.state.detail_list.map((item,index)=>{
								return(
									<dd key={"carlist"+item.itemcode + index} id={index}>
							 <div className="checkbox iconfont">
							 	<span className="nochecked" ref={"check"+index} key="checkbox" id={index} onClick={this.check.bind(this)}></span>
							 </div>
							 
								 <div className="goods-info">
								 	<Link to="/" className="imgbox">
								 		<img src={item.img}/>
								 	</Link>
								 	<div className="nocompile">
								 		<Link to="/" className="title">{item.title}</Link>
								 		<p className="message">
								 			<span className="color">{"颜色:"+item.color}</span>
								 			<span className="size">{"尺码:"+item.size}</span>
								 		</p>
								 		<p className="price">{"¥"+item.price}</p>
								 	</div>
								 	<div className="iscompile">
								 		<div className="btnbox">
								 			<div className="btn">
									 			<span className="addcount" id={index} onClick={(e)=>this.subcount(e)}>－</span>
										 		<span className="num">{item.num}</span>
										 		<span className="subcount" id={index} onClick={(e)=>this.addcount(e)}>＋</span>
									 		</div>
									 		<div className="message">
									 			<span>{"颜色:"+item.color+" 尺码:"+item.size}</span>
									 			<i className="iconfont">&#xe6d5;</i>
									 		</div>
								 		</div>
								 		<p className="price">{"¥"+item.price}</p>
								 	</div>
								 	<div className="count">{"×"+item.num}</div>
								 </div>
						</dd>
								)
								
							})
						}
						
					</dl>
				</div>
			</div>
				<Recommend/>
				<div id="goodscar-footer" className={this.state.compile+"footer goodscar-footer"}>
					<div className="checkbox iconfont">
					 	<span className="nochecked" ref="checkall" onClick={(e)=>this.checkall(e)}></span>
					 	<span>全选</span>
					 </div>
					 <div className="car-allprice">
					 	<p className="price">{"总计:¥"+this.state.allprice + "   " + ( +this.state.allnum + "件" )}</p>
					 	<p className="intro">不含运费</p>
					 </div>
					 <div className="car-compilebtn">
					 	<button className="car-collectbtn">移入收藏夹</button>
					 	<button className="car-remove" onClick={this.remove}>删除</button>
					 </div>
					 <button className="car-setbtn">结算</button>
				</div>
				
			</div>
		)
	}
}
const mapStateToprops = (state) => {
	return {
		detail_list: state.detail_list
	}
}
const mapDispatchToprops = (dispatch) => {
	return {

	}
}
const TodoContainer = connect(mapStateToprops, mapDispatchToprops)(GoodsCar) //
export default TodoContainer