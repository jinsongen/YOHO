import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Slider from 'react-slick'
import Header from './DetailComponents/DetailHeader'
import GoodsImg from './DetailComponents/GoodsLunbo'
import '../style/Detailcss/Detail.css'
import axios from 'axios'
import { connect, Provider } from "react-redux";
class Detail extends React.Component {
	constructor(props) {
		super(props);
		this.addcar = this.addcar.bind(this)
		this.addnum = this.addnum.bind(this)
		this.subnum = this.subnum.bind(this)
		this.chooseitem = this.chooseitem.bind(this)
		this.noaddcar = this.noaddcar.bind(this)
		this.addcar = this.addcar.bind(this)
		this.finalladdcar = this.finalladdcar.bind(this)
		this.state = {
			num:0,
			itemcode: "",
			showaddcar: "none",
			title: "",
			price: "",
			banimg: [],
			addcarimg: "",
			allcolor: ["红色", "黑色", "蓝色"],
			allsize: ["S", "M", "L", "XL", "XXL"],
			nochoosed: "请选择颜色尺码",
			ischoosed: "",
			choosedcolor: "",
			choosedsize: "",
			choosenum: 1,
			choosetf: [false, false]

		}
	}
	componentWillMount() {

		var itemcode = this.props.location.search.split("=")[1]
		axios.get('/api/getdetail').then(res => {

			var detailarr = res.data[0].products
			for(var i = 0; i < detailarr.length; i++) {
				if(detailarr[i].itemcode == itemcode) {
					//console.log(detailarr[i])
					this.state.itemcode = detailarr[i].itemcode
					this.state.title = detailarr[i].name
					this.state.price = detailarr[i].ytprice
					this.state.banimg = detailarr[i].middleimgurls
					this.state.addcarimg = detailarr[i].middleimgurls[0]
					this.setState({
						title: this.state.title,
						price: this.state.price,
						banimg: this.state.banimg,
						addcarimg: this.state.addcarimg,
						itemcode: this.state.itemcode
					})
				}
			}
		}).catch(err => {
			console.log(err)
		})
	}
	addcar() {
		//console.log(this.props)
		this.state.showaddcar = ""
		this.setState({
			showaddcar: this.state.showaddcar
		})
	}
	noaddcar() {
		this.state.showaddcar = "none"
		this.setState({
			showaddcar: this.state.showaddcar
		})
	}
	addnum() {
		this.state.choosenum = this.state.choosenum + 1
		this.setState({
			choosenum: this.state.choosenum
		})
	}
	subnum() {
		if(this.state.choosenum == 1) {
			return
		}
		this.state.choosenum = this.state.choosenum - 1
		this.setState({
			choosenum: this.state.choosenum
		})
	}
	chooseitem(e) {
		this.state.nochoosed = ""
		this.state.ischoosed = "已选:"
		var index = e.currentTarget.id
		//console.log(e.currentTarget.parentNode.children)
		if(e.currentTarget.className.indexOf("color") == -1) { //尺码  不是-1 不包含color类名
			for(var i = 0; i < e.currentTarget.parentNode.children.length; i++) {
				e.currentTarget.parentNode.children[i].className = "item size"
			}
			e.currentTarget.className = "item size itemchoosed"
			var size = this.state.allsize[index]
			this.state.choosedsize = size
			this.setState({
				choosedsize: this.state.choosedsize,
				nochoosed: this.state.nochoosed,
				ischoosed: this.state.ischoosed
			})
			this.state.choosetf[0] = true
		} else {
			for(var i = 0; i < e.currentTarget.parentNode.children.length; i++) {
				e.currentTarget.parentNode.children[i].className = "item color"
			}
			e.currentTarget.className = "item color itemchoosed"
			var color = this.state.allcolor[index]
			this.state.choosedcolor = color
			this.setState({
				choosedcolor: this.state.choosedcolor,
				nochoosed: this.state.nochoosed,
				ischoosed: this.state.ischoosed
			})
			this.state.choosetf[1] = true
		}
	}
	finalladdcar() {
		for(var i = 0; i < 2; i++) {
			if(this.state.choosetf[i] == false) {
				alert('请选择样式')
				return
			}
		}
		var obj = {
			itemcode: this.state.itemcode,
			num: this.state.choosenum,
			color: this.state.choosedcolor,
			size: this.state.choosedsize,
			img:this.state.addcarimg,
			price:this.state.price,
			title:this.state.title
		}
		if(localStorage.getItem("info") !== null){
			this.props.addstore(obj)//加到store
			this.noaddcar()
			console.log(this.props)
			var num = 0;
			for(var i = 0;i<this.props.detail_list.length;i++){
				num += Number(this.props.detail_list[i].num)
			}
			this.state.num = num
			this.setState({
				num:this.state.num
			})
		}else{
			alert("请先登录")
			return
		}
		
	}
	render() {
		//		console.log(this.props);
		var settings = {
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1
		};
		return(
			<div id="Detail-wrap">
				<Header/>
				<div id="Detail-banwrap">
			  <Slider {...settings}>
			        {
			        	this.state.banimg.map((items,index)=>{
			        		return(
			        			<div key={"goodsLunbo"+index}>
			        				<img src={items} />
			        			</div>
			        		)
			        	})
			        }					 
				</Slider>
				
			</div>
				<div className="detail-goodsinfo">
					<p className="title"><span className="name">{this.state.title}</span></p>
					<p className="goods-price"><span className="price">{"￥"+this.state.price}</span></p>
				</div>
				<div className="eva-pro">
					<span className="evaluate">商品评价</span>
					<span className="border"></span>
					<span className="problom">常见问题</span>
				</div>
				<ul className="pro-box">
					<li className="question">
						?商品都是正品吗?
					</li>
					<li className="answer">
						√有货www.yohobuy.com所售的商品均经品牌授权，正品保障，支持专柜验货，与您亲临商场选购的商品一样享受相同的质量保证，请您放心购买。
					</li>
				</ul>
				<div className="more iconfont">
					查看更多&#xe63d;
				</div>
				<p className="op-row">
						<span>Hi,</span>
						<span className="user-name">131****8944</span>
						<span>退出</span>
                        <span className="back-to-top">
                            Back to top
                            <i className="iconfont">&#xe684;</i>
                        </span>
                        </p>
				<p className="copyright">
                        CopyRight©2007-2016 南京新与力文化传播有限公司
                </p>
                <div className="detail-footer">
                
                	<Link to="/goodsCar"><span className="iconfont">&#xe670;</span><span className="text">购物车</span><span className="num">{this.state.num}</span></Link>
                	<div><span className="iconfont">&#xe66a;</span><span>品牌店铺</span></div>
                	<div><span className="iconfont">&#xe649;</span><span>收藏</span></div>
                	<button className="addcarbtn" onClick={this.addcar}>加入购物车</button>
                </div>
                <div className={"addcarshow "+this.state.showaddcar}>
                	<div className="masking" onClick={this.noaddcar}></div>
                	<div className="message">
                	<span className="close" onClick={this.noaddcar}>×</span>
                		<div className="preview">
                			<section>
                				<img src={this.state.addcarimg} />
                			</section>
                			<section>
                				<p className="price">{"¥"+this.state.price}</p>
                				<p className="choosed">{this.state.nochoosed}{this.state.ischoosed}&nbsp;{this.state.choosedcolor}&nbsp;{this.state.choosedsize}</p>
                			</section>
                		</div>
                		<div className="all">
                			<span className="text">颜色</span>
                			<div>
	                		{
	                			this.state.allcolor.map((item,index)=>{
	                				return(
	                					<span className="item color" onClick={(e)=>this.chooseitem(e)} key={'allcolor'+this.state.itemcode+index} id={index}>
	                						{item}
	                					</span>
	                				)
	                			})
	                		}
	                		</div>
                			<div className="clear"></div>
                		</div>
                		<div className="all">
                			<span className="text">尺码</span>
                			<div>
                			{
	                			this.state.allsize.map((item,index)=>{
	                				return(
	                					<span className="item size" onClick={(e)=>this.chooseitem(e)} key={'allsize'+this.state.itemcode+index} id={index}>
	                						{item}
	                					</span>
	                				)
	                			})
	                		}
                			</div>
                			<div className="clear"></div>
                		</div>
                		<div className="choosenum all">
                			<span className="text">数量</span>
                			<div className="numbtn">
                				<span onClick={this.subnum}>-</span>
                				<span>{this.state.choosenum}</span>
                				<span onClick={this.addnum}>+</span>
                			</div>
                		</div>
                	</div>
                	<div className="twobtn">
            			<span>立即购买</span>
            			<span onClick={this.finalladdcar}>加入购物车</span>

            		</div>
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
		addstore(obj) {
			return dispatch({
				type: 'ADD_CAR',
				payload: obj // 载荷
			})
		}

	}
}
const TodoContainer = connect(mapStateToprops, mapDispatchToprops)(Detail) //
export default TodoContainer