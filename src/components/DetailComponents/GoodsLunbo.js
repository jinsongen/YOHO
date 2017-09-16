import React from 'react';
import '../../style/Detailcss/lunbo.css'

import Slider from 'react-slick'
export default class LunBo extends React.Component {
	constructor() {
		super();
		this.state = {
			swipersrc: [
				"//img12.static.yhbimg.com/goodsimg/2017/09/13/17/02d0e4c8543c1552106932668359912945.jpg?imageMogr2/thumbnail/450x600/extent/450x600/background/d2hpdGU=/position/center/quality/60",
				"//img13.static.yhbimg.com/goodsimg/2017/09/13/17/02a439555641060f502d121eb19c5ca042.jpg?imageMogr2/thumbnail/450x600/extent/450x600/background/d2hpdGU=/position/center/quality/60",
				"//img11.static.yhbimg.com/goodsimg/2017/09/13/17/016fbb234ee4116e5ecf933f76db8ed06e.jpg?imageMogr2/thumbnail/450x600/extent/450x600/background/d2hpdGU=/position/center/quality/60"
			]
		}
	}
	render() {
		var settings = {
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1
		};
		return(
			
			<div id="Detail-banwrap">
			  <Slider {...settings}>
			        {
			        	this.state.swipersrc.map((items,index)=>{
			        		return(
			        			<div key={"goodsLunbo"+index}>
			        				<img src={items} />
			        			</div>
			        		)
			        	})
			        }					 
				</Slider>
				
			</div>
			
		)
	}
	componentDidMount() {
		// 	    var that = this 
		// 	    fetch('/api/getdata')
		// 	    .then(res=>{return res.json()})
		// 	    .then(data=>{		  		   
		//	   	    data.forEach((swiper,i)=>{
		//	   	   	    this.state.swipersrc.push(swiper.logo)
		//	   	    })
		//			console.log(this.state.swipersrc)
		//	    })

	}

}