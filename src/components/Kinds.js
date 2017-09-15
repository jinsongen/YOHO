import React from 'react';
import KindsSearch from "./KindsComponents/KindsSearch"
import {Link} from 'react-router-dom'

import "../style/KindsStyles/Kinds.css"
class Kinds extends React.Component{
	constructor(){
		super();
			
	}
	
	routerNone(){
//		     if(this.props.routerIsShow){
//		     	    this.state.routerIsShow = false   
//		     }
//		     if(!this.props.routerIsShow){
//		     	    this.state.routerIsShow = true
//		     }
		     console.log(this.state.routerIsShow)
	}
	
	render(){
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
				           <li>上衣</li>
				           <li>鞋类</li>
				           <li>裤类</li>
				           <li>帽类</li>
				           <li>包类</li>
				           <li>家具服</li>
				           <li>数码</li>
				           <li>个护/美妆</li>
				           <li>厨房用具</li>
				           <li>生活电器</li>
				           <li>文具用品</li>
				           <li>体育用品</li>
				     </div>
				     <div className="kinds_list_right">
				          <Link to="/kindslistcomponent">全部衣服</Link>
				          <li>运动衣</li>
				          <li>衬衫</li>
				          <li>卫衣</li>
				          <li>毛衫</li>
				          <li>礼服</li>
				          <li>短袖</li>
				     </div>
				 </div>
			</div>
		)
	}
	
	
	
	
}
export default Kinds
