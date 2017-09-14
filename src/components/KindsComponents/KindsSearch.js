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
		  	                <li>热搜</li>
		  	                <li>卡塔沙</li>
		  	                <li>渔夫帽</li>
		  	                <li>PUMA</li>
		  	                <li>Vans</li>
		  	                <li>手机壳</li>
		  	                <li>休闲运动</li>
		  	                <li>衬衫</li>
		  	                <li>boys TX</li>
		  	           </div>
		  	    </div>
		  	 </div>
		  )
	}
	
}



export default KindsSearch