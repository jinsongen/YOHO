import React from 'react';
import {Link} from 'react-router-dom'
import '../../style/Maincss/scroll.css'
export default class Recommend extends React.Component{
	render(){
		return(
			<div id="recommend">
				<p className="title">人气推荐</p>
				<img className="banimg" src="//img11.static.yhbimg.com/yhb-img01/2017/08/04/10/015f31dc40baa31dee9f602f1a84a6ae5f.jpg?imageView2/2/w/640/h/200/q/90"/>
				<section>
					<ul>
					{
						this.scrollContent()
					}
						
					</ul>
				</section>
			</div>
		)
	}
	scrollContent(){
		var arr=[]
		for(var i=0;i<8;i++){
			arr.push(
				<li key={"scroll"+i}><Link to="/">
					<img src="//img10.static.yhbimg.com/goodsimg/2016/08/21/17/0144b3d7d4b51ea0f1211844cee8fead87.jpg?imageMogr2/thumbnail/153x206/extent/153x206/background/d2hpdGU=/position/center/quality/60"/>
					<div className="goods-info">
						<p className="price">¥ 1480.00</p>
						<p className="view-num">118人</p>
						<p className="view-status">正在浏览</p>
					</div>
				</Link></li>
			)
		}
		return arr
	}
}