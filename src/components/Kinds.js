import React from 'react';
import KindsSearch from "./KindsComponents/KindsSearch"
import { Link } from 'react-router-dom'
import axios from "axios"

import Footer from "./Footer"
import "../style/KindsStyles/Kinds.css"
class Kinds extends React.Component {
	constructor() {
		super();
		this.state = {
			arrKinds : [],
			arrKinds2 : [],
			father:''
		}
        this.kindsChangeList = this.kindsChangeList.bind(this)
	}


componentDidMount() {
	var that = this
	axios.get("/api/getlist").then(function(res) {
//		console.log(res)
		that.state.arrKinds = res.data[0].data
		that.setState({
			arrKinds: that.state.arrKinds
		})
		setTimeout(function(){
			  that.kindsChangeList(0)
		},0)
	}, function(err) {
		console.log(err)
	})
}

kindsChangeList(a){
	 var that = this  
	 that.state.father = a
	 axios.get("/api/getlist").then(function(res){
	 	 that.state.arrKinds2 = res.data[0].data[a].data.data.recommend.categoryrecommend 
	 	 that.setState({
	 	 	   arrKinds2 : that.state.arrKinds2
	 	 })
//	 	 console.log(that.state.arrKinds2)	 	 
	 },function(err){
	 	 console.log(err)
	 })
	   
}

render() {
	return(
		<div className="kinds">				
				 <div className="Kinds_header" >
			  	     <Link to={"/kindssearch"}>
			  	          <i className="iconfont icon">&#xe709;</i>
			  	          <p >搜索商品</p>
			  	     </Link>
			  	  </div>
				 <div className="kinds_neck">
				    <li>Boys</li>
				    <li>Girls</li>
				    <li>Kids</li>
				    <li>LifeStyles</li>
				 </div>
				 <div className="kinds_list">
				     <div className="kinds_list_left">
				         {this.state.arrKinds.map((item,index)=>{
	     	          	 	    return (
	     	          	 	    <li onClick={()=>{this.kindsChangeList(index)}} key={"iidd"+index}>{item.name}</li>
	     	          	 	    )

	   	     	          	 })
				         }
				     </div>
				     <div className="kinds_list_right">
				     {
				     	  this.state.arrKinds2.map((item,index)=>{
				     	  	   return (
				     	  	   	    <Link key={"kinds2"+ index} to={{pathname:'/kindslistcomponent',state:{item:index,father:this.state.father}}}>{item.name}
				     	  	   	        <img src={item.imageurl} />
				     	  	   	    </Link>
				     	  	   )
				     	  	 
				     	  })
				     }
				          		         
				     </div>
				 </div>
				 <Footer />
			</div>
	)
}

}
export default Kinds