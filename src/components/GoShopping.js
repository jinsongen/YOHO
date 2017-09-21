import React from 'react';
import Header from './GoShopComponents/GoShopHeader'
import Banner from './GoShopComponents/GoShopBanner'
import Share from './GoShopComponents/GoShopShare'
import ShareXX from './GoShopComponents/GoShopShareXX'
import { Link } from 'react-router-dom';
import '../style/GoShopCss/GoShop.css'
import Footer from './Footer'
class GoShopping extends React.Component{
	constructor(){
		super();
	}
	render(){
		return(
			<div className = "goShop">
				<Header/>
				<Banner/>
				{/* <Link to = "/guang"><Share/></Link> */}
				<ShareXX/>
				<Footer/>
			</div>
		)
	}
}
export default GoShopping
