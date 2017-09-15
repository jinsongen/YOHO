import React from 'react';
import LoginHeader from './loginHeader';
import LoginForm from './loginForm';
import LoginFooter from './loginFooter';
import '../../style/LoginCss/login.css'
class Login extends React.Component{
	constructor(){
		super();
	}
	render(){
		return(
			<div className = "login">
				<LoginHeader/>
				<LoginForm/>
				<LoginFooter/>
			</div>
		)
	}
}
export default Login
