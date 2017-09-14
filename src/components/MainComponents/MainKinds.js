import React from 'react';
import '../../style/Maincss/kinds.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Slider from 'react-slick'
export default class MainKinds extends React.Component{
	render(){
		return(
			<div id="ban-kind">
				<Link to="/" className="ban"><img src="https://img10.static.yhbimg.com/yhb-img01/2017/09/12/09/01a679a17c373041f47ba573e39e55d75d.jpg?imageView2/3/w/640/h/200/q/60" /></Link>
				<Link to="/" className="ban"><img src="https://img10.static.yhbimg.com/yhb-img01/2017/09/12/09/01a679a17c373041f47ba573e39e55d75d.jpg?imageView2/3/w/640/h/200/q/60" /></Link>
				<div className="mainkinds">
					<p>热门品类</p>
					<section>
						<div>
							<Link to="/"><img src="//img11.static.yhbimg.com/yhb-img01/2017/09/14/11/01f0261d1d2936584b72abbc510832887f.jpg?imageView2/2/w/140/h/140/q/60" /></Link>
						</div>
						<div>
							<Link to="/"><img src="//img11.static.yhbimg.com/yhb-img01/2017/09/14/11/01f0261d1d2936584b72abbc510832887f.jpg?imageView2/2/w/140/h/140/q/60" /></Link>
						</div>
						<div>
							<Link to="/"><img src="//img11.static.yhbimg.com/yhb-img01/2017/09/14/11/01f0261d1d2936584b72abbc510832887f.jpg?imageView2/2/w/140/h/140/q/60" /></Link>
						</div>
						<div>
							<Link to="/"><img src="//img11.static.yhbimg.com/yhb-img01/2017/09/14/11/01f0261d1d2936584b72abbc510832887f.jpg?imageView2/2/w/140/h/140/q/60" /></Link>
						</div>
						<div>
							<Link to="/"><img src="//img11.static.yhbimg.com/yhb-img01/2017/09/14/11/01f0261d1d2936584b72abbc510832887f.jpg?imageView2/2/w/140/h/140/q/60" /></Link>
						</div>
						<div>
							<Link to="/"><img src="//img11.static.yhbimg.com/yhb-img01/2017/09/14/11/01f0261d1d2936584b72abbc510832887f.jpg?imageView2/2/w/140/h/140/q/60" /></Link>
						</div>
						<div>
							<Link to="/"><img src="//img11.static.yhbimg.com/yhb-img01/2017/09/14/11/01f0261d1d2936584b72abbc510832887f.jpg?imageView2/2/w/140/h/140/q/60" /></Link>
						</div>
						<div>
							<Link to="/"><img src="//img11.static.yhbimg.com/yhb-img01/2017/09/14/11/01f0261d1d2936584b72abbc510832887f.jpg?imageView2/2/w/140/h/140/q/60" /></Link>
						</div>
					</section>
				</div>
				
			</div>
		)
	}
}