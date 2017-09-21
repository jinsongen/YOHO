import React from 'react';
import {Link} from 'react-router-dom'
import '../../style/Maincss/scroll.css'
import axios from 'axios'
export default class Recommend extends React.Component{
	constructor(){
		super();
		this.state={
			listarr:[]
		}
		
	}
	componentDidMount(){
		axios.get('/api/getlist').then(res=>{
			var indexlistarr=res.data[0].data[4].data.data.recommend.categoryrecommend[0].data.data.product_list;

			this.state.listarr=indexlistarr
			this.setState({
				listarr:this.state.listarr
			})
			
		}).catch(err=>{
			console.log(err)
		})
	}
	render(){
		return(
			<div id="recommend">
				<p className="title">人气推荐</p>
				<img className="banimg" src="//img11.static.yhbimg.com/yhb-img01/2017/08/04/10/015f31dc40baa31dee9f602f1a84a6ae5f.jpg?imageView2/2/w/640/h/200/q/90"/>
				<section>
					<ul>
					{
						this.state.listarr.map((item,index)=>{
							return(
								<li key={"scroll"+item.itemcode}>
									<Link to="/">
										<img src={item.image}/>
										<div className="goods-info">
											<p className="price">{"¥"+item.price}</p>
											<p className="view-num">{item.yt_price+"人"}</p>
											<p className="view-status">正在浏览</p>
										</div>
									</Link>
								</li>
							)
						})
					}
						
					</ul>
				</section>
			</div>
		)
	}
	scrollContent(){
		var arr=[]
		for(var i=10;i<30;i++){
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