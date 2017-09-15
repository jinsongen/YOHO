import React from 'react';
import '../../style/LoginCss/loginHeader.css'
import { Link } from 'react-router-dom';
class LoginHeader extends React.Component{
	constructor(){
		super();
	}
	render(){
		return(
			<div className = "headerBox">
				<div className = "header clear">
					<div className = "header-top">
						<span className = "header-arc">
							<i className = "iconfont iconfont-arrow2-left"></i>
						</span>
						<Link to = "/register">
							<span className = "header-login">
								注册
							</span>
						</Link>
					</div>
					<p className = "header-Yoho">Yoho!Family账号可登录Yoho!Buy有货</p>
				</div>	
			</div>
		)
	}
}
export default LoginHeader
