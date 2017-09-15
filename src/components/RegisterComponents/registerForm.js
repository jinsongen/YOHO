import React from 'react';
import "../../style/RegisterCss/registerForm.css"
class RegisterForm extends React.Component {
	constructor() {
        super();
        this.state = {flag1:true,flag2:false};
        this.change = this.change.bind(this);
        // this.change2 = this.change2.bind(this);
    }
    change(){
        console.log(1);
        this.setState({
            flag1:!this.state.flag1,
            flag2:!this.state.flag2
        });
        
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
					<input className="phoneNum" type="text" placeholder="请输入手机号" />

				</div>
				<div className = "formCode">
					<i className = "iconfont iconfont-fabu"></i>
					<input className="codeMsg" type="text" placeholder="请输入验证码" />
					<span className = "getCode">获取验证码</span>
				</div>
                <div className = "formCode">
					<i className = "iconfont iconfont-jiesuo"></i>
					<input className="codeMsg" type="text" placeholder="请输入密码" />
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
					<button className = "fromBtn">注册</button>
				</div>
			</div>
		)
	}
}
export default RegisterForm
