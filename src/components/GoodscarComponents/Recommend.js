import React from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import "../../style/GoodsCar/carCommend.css"
import axios from 'axios'
export default class CarRecommend extends React.Component{
	
	constructor(){
		super();
		this.state={
			listarr:[]
		}
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
	componentDidMount(){
		this.loadgoods();
		
	}
	loadgoods(){
		var that = this;
		axios.get('/api/getlist').then(res=>{
			var indexlistarr=res.data[0].data[3].data.data.recommend.categoryrecommend[0].data.data.product_list;

		for(var i=0;i<30;i++){
			that.state.listarr.push(
				<section key={indexlistarr[i].itemcode}>
						<Link to={"/detail?itemcode="+indexlistarr[i].itemcode} onClick={this.add}>
							<div className="goos-img">
								<img src={indexlistarr[i].image} />
							</div>
							<div className="good-text">
								<p className="title">{indexlistarr[i].name}</p>
								<p className="price">{"￥"+indexlistarr[i].price}</p>
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
		that.setState({
				listarr:that.state.listarr
			})

		}).catch(err=>{
			console.log(err)
		})
		
		
	}
	render(){
		return(
			<div id="carcommend">
				<p className="carcommend-title">为你优选新品</p>
				<div className="carcommend-wrap">
					{this.state.listarr}
				</div>
			</div>
		)
	}
}