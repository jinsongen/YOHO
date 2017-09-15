import React from 'react';
import '../../style/RegisterCss/registerHeader.css'
class RegisterHeader extends React.Component{
	constructor(){
		super();
	}
	render(){
		return(
			<div className = "header">
                <div className = "header-txt">
					<span className = "header-arc">
						<i className="iconfont iconfont-arrow2-left"></i>
					</span>
					<span className = "header-tit">注册</span>
				</div>
			</div>
		)
	}
}
export default RegisterHeader