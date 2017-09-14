import React from 'react';
import '../../style/Maincss/hotbrand.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import '../../style/Maincss/lunbo.css'
export default class HotBrands extends React.Component{
	render(){
		return(
			<div id="hot-brand">
				<p>热门品牌</p>
				<section>
					<div><img src="//img10.static.yhbimg.com/yhb-img01/2017/09/11/09/0174b4e9eea9c697d10171b35ce515aadb.jpg?imageView2/2/w/158/h/174/q/60" /></div>
					<div><img src="//img10.static.yhbimg.com/yhb-img01/2017/09/11/09/01d604d5226315820b64cc3e3688eee08f.jpg?imageView2/2/w/158/h/174/q/60" /></div>
					<div><img src="//img11.static.yhbimg.com/yhb-img01/2017/09/11/09/01bcb163f14d01dffe3ada82f9db4b7e99.jpg?imageView2/2/w/158/h/174/q/60" /></div>
					<div><img src="//img11.static.yhbimg.com/yhb-img01/2017/09/11/09/01088e6efbe9adf355a36589937a3a57ff.jpg?imageView2/2/w/158/h/174/q/60" /></div>
					<div><img src="//img11.static.yhbimg.com/yhb-img01/2017/09/11/09/013e8f987cc738ca32c8b11875b5e26a90.jpg?imageView2/2/w/158/h/174/q/60" /></div>
					<div><img src="//img10.static.yhbimg.com/yhb-img01/2017/09/11/09/0174b4e9eea9c697d10171b35ce515aadb.jpg?imageView2/2/w/158/h/174/q/60" /></div>
					<div><img src="//img10.static.yhbimg.com/yhb-img01/2016/09/06/14/0173088d664d59084d9dd61fa2d8b78908.png?imageView2/2/w/320/h/172/q/60" /></div>
				</section>
			</div>
		)
	}
}
