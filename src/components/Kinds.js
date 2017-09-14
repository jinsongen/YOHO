import React from 'react';
import KindsSearch from "./KindsComponents/KindsSearch"
import {Link} from 'react-router-dom'

import "../style/KindsStyles/Kinds.css"
class Kinds extends React.Component{
	constructor(){
		super();
	}
	render(){
		return(
			<div className="kinds">				
				 <div className="Kinds_header" >
			  	     <Link to={"/search"}>
			  	          <i className="iconfont icon">&#xe709;</i>
			  	          <p>搜索商品</p>
			  	     </Link >
			  	  </div>
				
				 <div className="kinds_list">
				     <div className="kinds_list_left"></div>
				     <div className="kinds_list_right"></div>				     
				 </div>
			</div>
		)
	}
}
export default Kinds
