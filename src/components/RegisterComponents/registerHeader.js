import React from 'react';
import '../../style/RegisterCss/registerHeader.css'
import { Link } from 'react-router-dom';
class RegisterHeader extends React.Component{
	constructor(){
		super();
	}
	render(){
		return(
			<div className = "register-header">
                <div className = "header-txt">
					<Link to = "/login">
						<span className = "header-arc">
							<i className="iconfont iconfont-arrow2-left"></i>
						</span>
					</Link>
					<span className = "header-tit">注册</span>
				</div>
			</div>
		)
	}
}
export default RegisterHeader