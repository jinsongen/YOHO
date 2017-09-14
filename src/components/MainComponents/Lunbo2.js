import React from 'react';
import '../../style/Maincss/lunbo2.css'

import Slider from 'react-slick'
export default class LunBo extends React.Component{
	constructor(){
		super();
		this.state={
			swipersrc:[
			"//img10.static.yhbimg.com/yhb-img01/2017/09/12/09/0156b4602a8dc6d31b86373b6a951a63cd.jpg?imageView2/3/w/640/h/200/q/60",
			"//img11.static.yhbimg.com/yhb-img01/2017/09/12/09/0116b50a79b8fc1434db251c692b876a3a.jpg?imageView2/3/w/640/h/200/q/60",
			"//img10.static.yhbimg.com/yhb-img01/2017/09/12/09/0156b4602a8dc6d31b86373b6a951a63cd.jpg?imageView2/3/w/640/h/200/q/60"
			]
		}
	}
	render(){
var settings = {
	
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
		return(
		<div id="banner-wrap2">
			  <Slider {...settings}>
			        {
			        	this.state.swipersrc.map((items,index)=>{
			        		return(
			        			<div key={"lunbo2"+index}>
			        				<img src={items} />
			        			</div>
			        		)
			        	})
			        }					 
			</Slider>
		</div>
		)
	}
	componentDidMount(){
// 	    var that = this 
// 	    fetch('/api/getdata')
// 	    .then(res=>{return res.json()})
// 	    .then(data=>{		  		   
//	   	    data.forEach((swiper,i)=>{
//	   	   	    this.state.swipersrc.push(swiper.logo)
//	   	    })
//			console.log(this.state.swipersrc)
//	    })
//console.log(this.state.swipersrc)
    }

}
