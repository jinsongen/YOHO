import React from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import "../../style/GoodsCar/carCommend.css"
export default class CarRecommend extends React.Component{
	constructor(){
		super();
		this.showfind=this.showfind.bind(this);
	}
	showfind(e){
		if(e.currentTarget.nextSibling.className=="findmore none"){
			e.currentTarget.nextSibling.className="findmore block"
//			console.log(e.currentTarget.nextSibling.className)
		}else if(e.currentTarget.nextSibling.className=="findmore block"){
			e.currentTarget.nextSibling.className="findmore none"
//			console.log(e.currentTarget.nextSibling.className)
			
		}
//e.currentTarget.nextSibling.className="findmore block"
	}
	loadgoods(){
		var arr=[]
		for(var i=0;i<10;i++){
			arr.push(
				<section key={"CarRecommend"+i}>
						<Link to="/" onClick={this.add}>
							<div className="goos-img">
								<img src="//img10.static.yhbimg.com/goodsimg/2017/08/22/09/01a67fa242691217a12decd290e0cbe447.jpg?imageMogr2/thumbnail/235x314/extent/235x314/background/d2hpdGU=/position/center/quality/60/format/webp" />
								
							</div>
							<div className="good-text">
								<p className="title">HASO × YOHOOD合作款联名迷彩卫衣</p>
								<p className="price">¥780.00</p>
							</div>
						</Link>
						<span className="showfind iconfont icon" onClick={this.showfind}>
							&#xe6f9;
						</span>
						<div className="findmore none">
							<span>找相似</span>
						</div>
					</section>
			)
		}
		return arr
	}
	render(){
		return(
			<div id="carcommend">
				<p className="carcommend-title">为你优选新品</p>
				<div className="carcommend-wrap">
					{this.loadgoods()}
				</div>
			</div>
		)
	}
}