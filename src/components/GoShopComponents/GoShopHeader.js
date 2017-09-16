import React from 'react';
import '../../style/GoShopCss/GoShopHeader.css'
class Header extends React.Component{
	constructor(){
		super();
	}
	render(){
		return(
			<div className = "header">
				<div className = "header-nav">
                    <a className = "focus">最新</a>
                    <a>人气</a>
                    <a>搭配</a>
                    <a>潮品</a>
                    <a>视频</a>
                </div>
			</div>
		)
	}
}
export default Header
