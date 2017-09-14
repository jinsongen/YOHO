import React from 'react';
import '../../style/Maincss/active.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
class Active extends React.Component{
	render(){
		return(
			<div id="active">
				<section>
					<Link to='/'>
						<img src="https://img10.static.yhbimg.com/yhb-img01/2017/02/03/09/01ae835d5ae6d9502818daf351ad2db6cf.png?imageView2/2/w/98/h/98/q/60"/>
						<span>新品到着</span>
					</Link>
				</section>
				<section>
					<Link to='/'>
						<img src="https://img11.static.yhbimg.com/yhb-img01/2017/02/03/09/011004f5a04caaf9c18d7848049a75981e.png?imageView2/2/w/98/h/98/q/60"/>
						<span>人气搭配</span>
					</Link>
				</section>
				<section>
					<Link to='/'>
						<img src="https://img11.static.yhbimg.com/yhb-img01/2017/02/03/09/01d35157ab5942ea40b4f08a11c1680a17.png?imageView2/2/w/98/h/98/q/60"/>
						<span>折扣专区</span>
					</Link>
				</section>
				<section>
					<Link to='/kinds'>
						<img src="https://img10.static.yhbimg.com/yhb-img01/2017/02/03/09/01b097e06ac9fc78bbcc3d3e0dfbe01fcc.png?imageView2/2/w/98/h/98/q/60"/>
						<span>全部分类</span>
					</Link>
				</section>
			</div>
		)
	}
}
export default Active
