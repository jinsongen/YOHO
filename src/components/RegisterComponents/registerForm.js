import React from 'react';
import "../../style/RegisterCss/registerForm.css"
class RegisterForm extends React.Component {
	constructor() {
        super();
        this.state = {flag1:false,flag2:true};
		this.change = this.change.bind(this);
		this.register = this.register.bind(this);
		this.state = {
			hid:0
		}
    }
    change(){
        console.log(1);
        this.setState({
            flag1:!this.state.flag1,
            flag2:!this.state.flag2
        });
        
	}
	register(){
		let username = this.refs.username.value;
		let psw = this.refs.psw.value;
		fetch(`/api/register?username=${username}&psw=${psw}&t=${new Date().getTime().toString()}`)
		.then((response) => response.json())
		.then((json) => {
			//处理返回值
			if(json.msg){
				localStorage.clear();
				localStorage.setItem("info",`{"flag":${json.msg},"msg":"${username}"}`);
				window.location = "/";
			}else{
				// console.log("f");
				console.log("用户已注册");
				this.setState({
					hid:!this.state.hid
				})
				setTimeout(()=>{
					this.setState({
						hid:!this.state.hid
					})
				},2000);
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
					<input className="phoneNum" type="text" placeholder="请输入手机号" ref = "username" />

				</div>
				<div className = "formCode">
					<i className = "iconfont iconfont-fabu"></i>
					<input className="codeMsg" type="text" placeholder="请输入验证码" />
					<span className = "getCode">获取验证码</span>
				</div>
                <div className = "formCode">
					<i className = "iconfont iconfont-jiesuo"></i>
					<input className="codeMsg" type={this.state.flag1?"text":"password"} placeholder="请输入密码" ref = "psw"/>
					<i className = "iconfont iconfont-yanjing eyes" onClick={this.change} style={this.state.flag1?{display:"block"}:{display:"none"}}></i>
                    <i className = "iconfont iconfont-niming eyes" onClick={this.change}  style={this.state.flag2?{display:"block"}:{display:"none"}}></i>
				</div>
                <div className = "formCode">
					<i className = "iconfont iconfont-user"></i>
					<input className="codeMsg" type="text" placeholder="好友潮流口令（非必填）" />
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
					<button className = "fromBtn" onClick = {this.register}>注册</button>
				</div>
				<div className = "form-tip" style = {this.state.hid == 1?{display:"block"}:{display:"none"}}>
					用户名已注册
				</div>
			</div>
		)
	}
}
export default RegisterForm
