import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../../style/GoShopCss/GoShopShareXX.CSS'
class ShareXX extends React.Component {
	constructor() {
		super();
	}
	componentDidMount(){
		this.props.add();	
	}
	render() {
		console.log(this.props.listData);
		return (
			<div>
				{
					this.props.listData.map((item,index)=>{
						return(
							<Link to = {"/guang/"+index} key = {"x"+index}>
							<div className="share">
				<div className="shareBox">
					<div className="share-tit">
						<div className="tit-lt">
							<img src="//img10.static.yhbimg.com/author/2017/05/23/15/0187de3b3addb51377dcb272d44ed29dff.jpg?imageView2/2/interlace/1/q/60" alt="" />
							<span>达达</span>
						</div>
						<span className="tit-rt">搭配</span>
					</div>
					<img className="clothes" src={item.largeimgurls[0]} alt="" />
					<p className="txt1">{item.name}</p>
					<p className="txt2">{item.showcategory}</p>
					<div className="notice">
						<div className="notice-lt">
							<p className="notice-timer">
								<i className="iconfont iconfont-dengdai"></i>
								<span>09月15日 21:50</span>
								<i className="iconfont iconfont-yanjing eyes"></i>
								<span className>13800</span>
							</p>
						</div>
						<div className="notice-rt">
							<i className="iconfont iconfont-zan"></i>
							<span>45</span>
						</div>
					</div>
				</div>
			</div>
			</Link>
						)
					})
				}
			</div>
			
		)
	}
}
// export default  ShareXX
function mapStateToProps(state) {
	console.log(state.goShopping);
	return {
		listData: state.goShopping.listData
	}
}
function mapDispatchToProps(dispatch) {
	return {
	add() {
		fetch("/api/getdetail").then((res) => {
				return res.json();
			}).then((data) => {
				console.log(data[0].products)
				dispatch({
					type:"LISTDATA",
					payload:data[0].products
				})
			})
		}
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(ShareXX)