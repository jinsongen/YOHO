import React from 'react';
import {Link} from 'react-router-dom'
import '../../style/Maincss/maybelike.css'
export default class MaybeLike extends React.Component{
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
				<section key={"mblike"+i}>
						<Link to={"/detail/"+i} onClick={this.add}>
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
			<div id="maybelike">
				<div className="iconfont icon">
					<span>&#xe679;</span>
					<span>你可能喜欢</span>
				</div>
				<div className="likecontent">
					{this.loadgoods()}
				</div>
			</div>
		)
	}
}