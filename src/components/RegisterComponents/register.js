import React from 'react';
import Header from './registerHeader';
import RegisterForm from './registerForm';
class Register extends React.Component{
	constructor(){
		super();
	}
	render(){
		return(
			<div className = "register">
               <Header/>
			   <RegisterForm/>
			</div>
		)
	}
}
export default Register
