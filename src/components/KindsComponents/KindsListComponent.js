import React from "react"
import {Link} from 'react-router-dom'
import axios from "axios"
import HeaderAndNeck from "./HeaderAndNeck"
import "../../style/KindsStyles/KindsListComponent.css"
class KindsListComponent extends React.Component{
	    constructor(){
	    	 super()
	    }
	    
	   	showfind(e){
		if(e.currentTarget.nextSibling.className=="findmore none"){
			e.currentTarget.nextSibling.className="findmore block"
//			console.log(e.currentTarget.nextSibling.className)
		}else if(e.currentTarget.nextSibling.className=="findmore block"){
			e.currentTarget.nextSibling.className="findmore none"
//			console.log(e.currentTarget.nextSibling.className)
			
		} 
	}    
	   loadgoods(){
		var arr=[]
		for(var i=0;i<10;i++){
			arr.push(
				<section key={"mblike"+i}>
						<Link to="/" onClick={this.add}>
							<div className="goos-img">
							    <img src="//img13.static.yhbimg.com/goodsimg/2017/09/14/14/026761f40b0e5703654a82be0814aeac6a.jpg?imageMogr2/thumbnail/235x314/extent/235x314/background/d2hpdGU=/position/center/quality/60"/>

								
							</div>
							<div className="good-text">
								<p className="title">HASO × YOHOOD合作款联名迷彩卫衣</p>
								<p className="price">¥780.00</p>
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
		return arr
	}
	    
	    render(){
	    	return (
	    		 <div className="KindsListComponent">
	    		      <HeaderAndNeck/>
	    		      <div className="Kind_List_choose">
	    		             <li className="iconfont">默认&#xe674;</li>
	    		             <li>新品</li>
	    		             <li>人气</li>
	    		             <li>价格</li>
	    		             <li className="iconfont">筛选&#xe674;</li>	    		             
	    		      </div>
	    		      <div className="likecontent">
					        {this.loadgoods()}
				     </div>
	    		 </div>
	    	)
	    }
}

export default KindsListComponent
