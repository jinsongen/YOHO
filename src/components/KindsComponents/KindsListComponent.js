import React from "react"
import {Link} from 'react-router-dom'
import axios from "axios"
import HeaderAndNeck from "./HeaderAndNeck"
import "../../style/KindsStyles/KindsListComponent.css"
class KindsListComponent extends React.Component{
	    constructor(){
	    	 super()
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
	    		 </div>
	    	)
	    }
}

export default KindsListComponent
