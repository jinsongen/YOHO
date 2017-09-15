import React from 'react';
import '../../style/LoginCss/loginFooter.css'
class LoginFooter extends React.Component{
	constructor(){
		super();
	}
	render(){
		return(
			<div className = "footer">
				<div className = "ft-title">
					<span className = "ft-line"></span>
					<span className = "ft-tit">使用第三方登录</span>
					<span className = "ft-line"></span>
				</div>
				<div className = "ft-logo">
					<a><i className = "iconfont iconfont-pay-alipay-1"></i></a>
					<a><i className = "iconfont iconfont-share-weibo"></i></a>
					<a><i className = "iconfont iconfont-share-qq"></i></a>
				</div>
			</div>
		)
	}
}
export default LoginFooter
