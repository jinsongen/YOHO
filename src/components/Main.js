import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import axios from 'axios'
import "../style/Maincss/main.css"
//@import 'nprogress/nprogress';
import LunBo from './MainComponents/Lunbo'
import Active from './MainComponents/Active'
import MainKinds from './MainComponents/MainKinds'
import LunBo2 from './MainComponents/Lunbo2'
import HotBrand from './MainComponents/HotBrand'
import Scroll from './MainComponents/Scroll'
import MybeLike from './MainComponents/MybeLike'
import Footer from './Footer'

import ReactIScroll from 'reactjs-iscroll';
import iScroll from 'iscroll/build/iscroll-probe';
//import Drawer from './MainComponents/Drawer'
class Main extends React.Component {
	constructor(props) {
		super(props);
		this.showfind = this.showfind.bind(this);
		this.loadData = this.loadData.bind(this)
		this.state = {
			listarr: [],
			
			currentPage: 1,
      		lastPage: false
		}
		this.prop={

				pullUp: true,
				pullDown: false,
				pullUpThreshold:0.1

		}
		this.handleScroll=this.handleScroll.bind(this)
	}
	showfind(e) {
		if(e.currentTarget.nextSibling.className == "findmore none") {
			e.currentTarget.nextSibling.className = "findmore block"
			//			console.log(e.currentTarget.nextSibling.className)
		} else if(e.currentTarget.nextSibling.className == "findmore block") {
			e.currentTarget.nextSibling.className = "findmore none"
			//			console.log(e.currentTarget.nextSibling.className)

		}
		//e.currentTarget.nextSibling.className="findmore block"
	}

	componentDidMount() {
		this.loadData();
		 window.addEventListener('scroll', this.handleScroll);
	}
	handleScroll(){
		//console.log(this)

	}
	handleRefresh(downOrUp, callback){
		console.log("上啦")
    let {currentPage, lastPage} = this.state;//改变state中的数组
	if (downOrUp === 'up') { // 加载更多
		if (currentPage === 3) {
        lastPage = true;
      } else {
        currentPage++;
      }
     }
       this.setState({
	      currentPage,
	      lastPage
	    },() => {
	      this.loadData(downOrUp, callback);
	    });
	}
	loadData(downOrUp, callback) {
		var that = this;
    	const {currentPage} = this.state;
		axios.get('/api/getlist').then(res => {
			var indexlistarr = res.data[0].data[0].data.data.recommend.categoryrecommend[0].data.data.product_list;
			console.log(indexlistarr)
			for(var i = 0; i < 10; i++) {
				that.state.listarr.push(
					<section key={indexlistarr[i].itemcode}>
						<Link to={"/detail?itemcode="+indexlistarr[i].itemcode} onClick={this.add}>
							<div className="goos-img">
								<img src={indexlistarr[i].image} />
							</div>
							<div className="good-text">
								<p className="title">{indexlistarr[i].name}</p>
								<p className="price">{"￥"+indexlistarr[i].price}</p>
							</div>
						</Link>
						<span className="showfind iconfont icon" onClick={this.showfind}>
							&#xe6f9;
						</span>
						<div className="findmore none">
							<span>找相似</span>
						</div>
					</section>
				)

			}
			that.setState({
				listarr: that.state.listarr
			})
			if (callback && typeof callback === 'function') {
            callback();
          }

		}).catch(err => {
			 if (callback && typeof callback === 'function') {
          callback();
        }
		})

	}
	
	render() {
		const {
			pullUp,
			pullDown,
			pullUpThreshold
		} = this.prop;

		return(

			<div id="main_wrap">
				<header className="main-header">
					<span className="iconfont icon">&#xe667;</span>
					<h3>YaoHe!</h3>
					<span className="iconfont icon">&#xe665;</span>
				</header>
					<LunBo/>
				<Active/>
				<MainKinds/>
				<LunBo2/>
				<HotBrand/>
				<Scroll/>
				<div id="maybelike">
				<div className="iconfont icon">
					<span>&#xe679;</span>
					<span>你可能喜欢</span>
				</div>
				<div className="likecontent">
					{this.state.listarr}
				</div>
			</div>
			
				<Footer/>
			</div>

		)
	}
}



export default Main