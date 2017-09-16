import React from 'react';
import '../../style/GoShopCss/GoShopShareXX.CSS'
class ShareXX extends React.Component{
	constructor(){
		super();
	}
	render(){
		return(
			<div className = "share">
				<div className = "shareBox">
					<div className = "share-tit">
						<div className = "tit-lt">
							<img src = "//img10.static.yhbimg.com/author/2017/05/23/15/0187de3b3addb51377dcb272d44ed29dff.jpg?imageView2/2/interlace/1/q/60" alt = ""/>
							<span>达达</span>
						</div>
						<span className = "tit-rt">搭配</span>
					</div>
					<img className = "clothes" src = "//img11.static.yhbimg.com/article/2017/09/13/14/017be3bde852d9eb551cfbe99b0476fc66.jpg?imageView2/2/w/640/h/640/q/60" alt = ""/>
					<p className = "txt1">听说现在睡裤很流行外穿！？</p>
					<p className = "txt2">格纹经典不可错过~</p>
					<div className = "notice"> 
						<div className = "notice-lt">
							<p className = "notice-timer">
								<i className = "iconfont iconfont-dengdai"></i>
								<span>09月15日 21:50</span>
								<i className = "iconfont iconfont-yanjing eyes"></i>
								<span className>13800</span>
							</p>
						</div>
						<div className = "notice-rt">
							<i className = "iconfont iconfont-zan"></i>
							<span>45</span>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
export default  ShareXX
