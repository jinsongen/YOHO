import React from "react"
import { Link } from 'react-router-dom'
import axios from "axios"
import HeaderAndNeck from "./HeaderAndNeck"
import "../../style/KindsStyles/KindsListComponent.css"
class KindsListComponent extends React.Component {
	constructor(props, context) {
		super(props, context)
		this.state = {
			arrKinds3: [],
			father: '',
			son: '',
			listarr: [],
			title:''
		}
		this.loadgoods = this.loadgoods.bind(this)
	}

	showfind(e) {
		if(e.currentTarget.nextSibling.className == "findmore none") {
			e.currentTarget.nextSibling.className = "findmore block"
			//			console.log(e.currentTarget.nextSibling.className)
		} else if(e.currentTarget.nextSibling.className == "findmore block") {
			e.currentTarget.nextSibling.className = "findmore none"
			//			console.log(e.currentTarget.nextSibling.className)

		}
	}
	//.....................加载数据........................
	componentWillMount() {
		var that = this;
		var father = this.props.location.state.father
		var son = this.props.location.state.item
		axios.get("/api/getlist").then(function(res) {
			
//			console.log(res.data[0].data[father].data.data.recommend.categoryrecommend[son].data.data.product_list)
			that.state.arrKinds3 = res.data[0].data[father].data.data.recommend.categoryrecommend[son].data.data.product_list
            that.state.title = res.data[0].data[father].data.data.recommend.categoryrecommend[son].name
			that.setState ({
				arrKinds3: that.state.arrKinds3,
				title : that.state.title
			})
			
			that.loadgoods.call(that)
           
		}, function(err) {
			console.log(err)
		})
	}
   //.........................将加载的数据出入到<section>中...................................
	loadgoods() {
		var that = this		
		for(var i = 0; i < this.state.arrKinds3.length; i++) {
//			console.log(this.state.arrKinds3[i])
			this.state.listarr.push(
				<section key={this.state.arrKinds3[i].promotion_price+i} >
						<Link to="/" onClick={this.add}>
							<div className="goos-img">
							    <img src={this.state.arrKinds3[i].image}/>								
							</div>
							<div className="good-text">
								<p className="title">{this.state.arrKinds3[i].name}</p>
								<p className="price">¥{this.state.arrKinds3[i].promotion_price}</p>
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
		
	  this.setState({
	  	     listarr : that.state.listarr
	  })
     
    
		
	}
 
 //.........................价格排序........................ 	
	sortPrice(){
		var that = this		 
        function compare(property){
		    return function(a,b){
		        var value1 = a[property];
		        var value2 = b[property];
		        return value1 - value2;
		    }
		}       
					  			 
		this.state.listarr.sort(compare('key'))

		this.setState({
	  	     listarr : that.state.listarr
	    })
		
		console.log(this.state.listarr)
		 
	}
 
    componentDidUpdata(){
	    console.log("0")	
	}
 
	render() {
		return(
			<div className="KindsListComponent">
	    		      <HeaderAndNeck state={{title:this.state.title}}/>
	    		 
	    		      <div className="Kind_List_choose">
	    		             <li className="iconfont">默认&#xe674;</li>
	    		             <li>新品</li>
	    		             <li>人气</li>
	    		             <li onClick={()=>{this.sortPrice()}}>价格</li>
	    		             <li className="iconfont">筛选&#xe674;</li>	    		             
	    		      </div>
	    		      
	    		      <div className="likecontent">
                          {this.state.listarr}
				     </div>
	    		 </div>
		)
	}

	
}

export default KindsListComponent