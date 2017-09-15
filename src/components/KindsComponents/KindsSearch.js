import React from 'react';
import "../../style/KindsStyles/KindsSearch.css"
import {Link} from 'react-router-dom'
import axios from "axios"
class KindsSearch extends React.Component{
	
	constructor(){
		  super();
		  this.state = {
		  	   isShow : "tabNone",
		  	   hot_word:[]
		  }
		  this.showTab = this.showTab.bind(this);
	}
	
//.....................tab标签显示消失...............
	showTab(){  
			var tf =  this.state.isShow
			if(tf=="tabNone"){
				this.state.isShow = "tabBlock"
				this.setState({
		         	isShow : "tabBlock"
		      })
			}
			if(tf=="tabBlock"){
				this.state.isShow = "tabNone"
				this.setState({
		         	isShow : "tabNone"
		      })
			}		      		     
		      console.log(this.state.isShow)
	}
	
	componentWillMount(){
		  
//		   axios.get("/api/getdata").then(function(res){
//		   	   this.setState({
//		   	   	  hotList : res.data      
//		   	   })
//		   	  
//		   	   console.log(this.state.hotList)
//		   }).then(function(err){
//		   	  console.log(err)
//		   })
	}
	
	render(){
		  return (
		  	 <div className="kindsSearch">
		  	    <header>
		  	           <Link to="/kinds"><span className="iconfont icon">&#xe67d;</span></Link>
		  	           <span>搜索</span>
		  	           <span onClick={this.showTab} className="iconfont icon">&#xe667;</span>
		  	    </header>

		  	    <div className="tab " id={this.state.isShow}>
		  	       		<li><Link to="/"><i className="icon iconfont">&#xe625;</i><span>首页</span></Link></li>
				        <li><Link to="/kinds"><i className="icon iconfont">&#xe667;</i><span>分类</span></Link></li>
				        <li><Link to="/goodsCar"><i className="icon iconfont">&#xe670;</i><span>购物车</span></Link></li>
				        <li><Link to="/my"><i className="icon iconfont">&#xe705;</i><span>我的</span></Link></li>
		  	    </div>
		  	    
		  	    <div className="neck">		  	    
		  	           <div className="neck_up">
		  	                 <input className='iconfont icon' type="text" placeholder="&#xe709; &nbsp;&nbsp;满额最高减200元"/>
		  	                 <button>搜索</button>
		  	           </div>
		  	           <div className="neck_down">
		  	               
		  	           </div>
		  	    </div>
		  	    
		  	    <div className="kinds_contents">
		  	      <div className="kinds_contents_box">
		  	        <div className="kinds_just_search">
		  	            <p>最近搜索</p>
		  	            <span>格子衬衫</span>
		  	        </div>
		  	        <p>猜你想找</p>
		  	          <span>休闲/运动鞋</span>
		  	          <span>衬衫</span>
		  	          <span>短袖</span>
		  	          <span>PUMA精品</span>
		  	          <span>T恤</span>
		  	          <span>ROCOCO洛可可</span>
		  	          <span>JNBY</span>
		  	          <span>速写sCROQUIS</span>
		  	        </div>
		  	    </div>
		  	 </div>
		  )
	}
	
}



export default KindsSearch