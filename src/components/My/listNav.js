import React from 'react';
import '../../style/my/listNav.css'
class ListNav extends React.Component{
	constructor(){
		super();
	}
	render(){
		return(
			<div className = "list">
				<div className = "oder">
					<a className = "oderTxt">
						<span className = "oder-sp1">我的订单</span>
						<span className = "oder-sp2">我的订单&gt;</span>
					</a>
					<div className = "oderPic">
						<a>
							<i className = "iconfont iconfont-bank"></i>
							<p>待付款</p>
						</a>
						<a>
							<i className = "iconfont iconfont-dianpu"></i>
							<p>待发货</p>
						</a>
						<a>
							<i className = "iconfont iconfont-wuliu"></i>
							<p>待收货</p>
						</a>
					</div>	
				</div>
				<div className = "address">
					<a>
						<div className = "address-lt">
							<i className = "iconfont iconfont-dingwei"></i>
							<span>地址管理</span>
						</div>
						<span className = "address-rt">&gt;</span>
					</a>
				</div>
				<div className = "discountBox">
					<div className = "discount">
						<a>
							<div className = "discount-lt">
								<i className = "iconfont iconfont-hongbao2"></i>
								<span>优惠券</span>
							</div>
							<span className = "discount-rt">&gt;</span>
						</a>
					</div>
					<div className = "discount">
						<a>
							<div className = "discount-lt">
								<i className = "iconfont iconfont-money"></i>
								<span>有货币</span>
							</div>
							<span className = "discount-rt">&gt;</span>
						</a>
					</div>
				</div>

				<div className = "friendBox">
					<div className = "friend">
						<a>
							<div className = "friend-lt">
								<i className = "iconfont iconfont-hongbao2"></i>
								<span>优惠券</span>
							</div>
							<span className = "friend-rt">&gt;</span>
						</a>
					</div>
					<div className = "friend">
						<a>
							<div className = "friend-lt">
								<i className = "iconfont iconfont-money"></i>
								<span>有货币</span>
							</div>
							<span className = "friend-rt">&gt;</span>
						</a>
					</div>
				</div>
				<div className = "feedback">
					<a>
						<div className = "feedback-lt">
							<i className = "iconfont iconfont-help"></i>
							<span>服务与反馈</span>
						</div>
						<span className = "feedback-rt">&gt;</span>
					</a>
				</div>
			</div>
		)
	}
}
export default ListNav
