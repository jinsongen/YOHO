import React from 'react';
import {Link} from 'react-router-dom'
import '../../style/Maincss/maybelike.css'
import axios from 'axios'
export default class MaybeLike extends React.Component{
	constructor(){
		super();
		this.showfind=this.showfind.bind(this);
		this.loadgoods=this.loadgoods.bind(this)
		this.state={
			listarr:[]
		}
		
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
			var indexlistarr=res.data[0].data[0].data.data.recommend.categoryrecommend[0].data.data.product_list;
			console.log(indexlistarr)
		for(var i=0;i<10;i++){
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
		console.log(that.state.listarr)
		}).catch(err=>{
			console.log(err)
		})
		
		
	}
	render(){
		return(
			<div id="maybelike">
				<div className="iconfont icon">
					<span>&#xe679;</span>
					<span>你可能喜欢</span>
				</div>
				<div className="likecontent">
					{this.state.listarr}
				</div>
			</div>
		)
	}
}