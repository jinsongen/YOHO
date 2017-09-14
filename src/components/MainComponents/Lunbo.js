import React from 'react';
import '../../style/Maincss/lunbo.css'

import Slider from 'react-slick'
export default class LunBo extends React.Component{
	constructor(){
		super();
		this.state={
			swipersrc:[
			"https://img10.static.yhbimg.com/yhb-img01/2017/09/12/09/0138715ebe1f1be564d6ddae1ae092397a.jpg?imageView2/2/w/640/h/240/q/60",
			"https://img10.static.yhbimg.com/yhb-img01/2017/09/12/09/0169d9e699f092e0ffe2ff96d3e1ad6a80.jpg?imageView2/2/w/640/h/240/q/60",
			"https://img10.static.yhbimg.com/yhb-img01/2017/09/12/09/0138715ebe1f1be564d6ddae1ae092397a.jpg?imageView2/2/w/640/h/240/q/60",
			"https://img11.static.yhbimg.com/yhb-img01/2017/09/12/09/01794d6fa2d3b8625a01caf6a9b213cc8b.jpg?imageView2/2/w/640/h/240/q/60",
			"https://img10.static.yhbimg.com/yhb-img01/2017/09/12/09/0138715ebe1f1be564d6ddae1ae092397a.jpg?imageView2/2/w/640/h/240/q/60"
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
		<div id="banner-wrap">
			  <Slider {...settings}>
			        {
			        	this.state.swipersrc.map((items,index)=>{
			        		return(
			        			<div key={"lunbo"+index}>
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

    }

}
