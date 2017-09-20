import React from 'react';
import "../../style/LoginCss/loginForm.css"
class LoginForm extends React.Component {
	constructor() {
		super();
		this.login = this.login.bind(this);
	}
	login(){
		let username = this.refs.username.value;
		fetch(`/api/login?username=${username}&t=${new Date().getTime().toString()}`)
		.then((response) => response.json())
		.then((json) => {
			//处理返回值
			console.log(json.msg);
			if(json.msg){
				window.location = "/";
			}else{
				console.log("t");
			}
			
		})
		
	}
	render() {
		return (
			<div className="form">
				<div className="form-phone">
					<div className="phone-lt">
						<i className="iconfont iconfont-phone"></i>
						<select>
							<option>澳大利亚</option>
							<option>韩国</option>
							<option>加拿大</option>
							<option>马来西亚</option>
							<option>美国</option>
							<option>日本</option>
							<option>新加坡</option>
							<option>英国</option>
							<option selected="selected">中国</option>
							<option>中国澳门</option>
							<option>中国台湾</option>
							<option>中国香港</option>
						</select>
						<span className="triangle"></span>
					</div>
					<div className="spacer"></div>
					<input className="phoneNum" type="text" placeholder="请输入手机号" ref = "username"/>

				</div>
				<div className = "formCode">
					<i className = "iconfont iconfont-fabu"></i>
					<input className="codeMsg" type="text" placeholder="请输入验证码" />
					<span className = "getCode">获取验证码</span>
				</div>
				<div className = "formList">
					<div className = "listTxt">
						<span className = "txt-lt">请将下列图片点击翻转至正向朝上</span>
						<span className = "txt-rt">换一批</span>
					</div>
					<ul className = "listPic">
						<li></li>
						<li></li>
						<li></li>
						<li></li>
					</ul>
					<button className = "fromBtn" onClick = {this.login}>登录</button>
					<div className = "fromAccount">
						<a>海外账号登录</a>
						<a>账号密码登录</a>
						<a>忘记密码?</a>
					</div>
				</div>
			</div>
		)
	}
}
export default LoginForm
