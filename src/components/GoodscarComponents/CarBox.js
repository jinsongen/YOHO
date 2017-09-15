import React from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import "../../style/GoodsCar/carbox.css"


export default class NoLogincar extends React.Component{
	constructor(){
		super();
		this.state={
			isLogin:"true",
			isGoods:"true",
			compile:"compile"

		}
	}
	componentDidMount(){
//		console.log(12)
		
	}
	render(){
		return(
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
							 <div className="checkbox">
							 	<span className={"iconfont"}>&#xe6a8;</span>
							 </div>
							 <Link to="/">
								 <div className="goods-info">
								 	<div className="imgbox">
								 		<img src="//img10.static.yhbimg.com/goodsimg/2017/08/18/14/01d151c110aee36f77cb2a2cff9195c08d.jpg?imageMogr2/thumbnail/120x160/extent/120x160/background/d2hpdGU=/position/center/quality/60/format/webp"/>
								 	</div>
								 	<div className="nocompile">
								 		<p className="title">:CHOCOOLATE  多口袋工装束口裤</p>
								 		<p className="message">
								 			<span className="color">颜色:黑色</span>
								 			<span className="size">尺码:L</span>
								 		</p>
								 		<p className="price">123</p>
								 	</div>
								 	<div className="iscompile">
								 		<div className="btnbox">
								 			<div className="btn">
									 			<span className="addcount">＋</span>
										 		<span className="num">1</span>
										 		<span className="subcount">－</span>
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
							 </Link>
						</dd>
					</dl>
				</div>
			</div>
		)
	}
}
