import React from 'react';
import '../../style/Maincss/kinds.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Slider from 'react-slick'
import axios from 'axios'
export default class MainKinds extends React.Component{
	constructor(){
		super();
		this.state={
			mainkindarr:[]
		}
	}
	componentDidMount(){
		axios.get('/api/getlist').then(res=>{
			var indexlistarr=res.data[0].data[4].data.data.recommend.categoryrecommend;

			this.state.mainkindarr=indexlistarr
			this.setState({
				mainkindarr:this.state.mainkindarr
			})
			
		}).catch(err=>{
			console.log(err)
		})
	}
	render(){
		return(
			<div id="ban-kind">
				<Link to="/" className="ban"><img src="https://img10.static.yhbimg.com/yhb-img01/2017/09/12/09/01a679a17c373041f47ba573e39e55d75d.jpg?imageView2/3/w/640/h/200/q/60" /></Link>
				<Link to="/" className="ban"><img src="//img11.static.yhbimg.com/yhb-img01/2017/09/12/09/0105255ee948df5fac67fba505dcd3322b.jpg?imageView2/3/w/640/h/200/q/60" /></Link>
				<div className="mainkinds">
					<p>热门品类</p>
					<section>
						{
							this.state.mainkindarr.map((item,index)=>{
								return(
									<div key={"mainkinds"+index}>
										<Link to={{pathname:'/kindslistcomponent',state:{item:index,father:4}}}>
											<img src={item.imageurl} />
										</Link>
									</div>
								)
							})
						}
						
						
					</section>
				</div>
				
			</div>
		)
	}
}