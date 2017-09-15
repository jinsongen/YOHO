import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Affix, Button } from 'antd';
import './style/iconfont/iconfont.css'
import './style/APP.css'

import Main from './components/Main';
import Kinds from './components/Kinds';
import GoShopping from './components/GoShopping';
import GoodsCar from './components/GoodsCar';
import My from './components/My';
import Detail from './components/Detail'
import KindsListComponent from './components/KindsComponents/KindsListComponent'
import KindsSearch from "./components/KindsComponents/KindsSearch"

import Login from './components/LoginComponents/login';
import Register from './components/RegisterComponents/register';
class App extends Component {
	constructor(){
		super();

	}

  render() {
    return (
       <Router>
    <div id="app_wrap">
	    <div className="content_wrap">
	      <Route exact path="/" component={Main} />
	      <Route path="/kinds" component={Kinds} />
	      <Route path="/goShopping" component={GoShopping} />
	      <Route path="/goodsCar" component={GoodsCar} />
	      <Route path="/my" component={My} />
	      <Route path="/detail/:id" component={Detail}/>
	      <Route path="/kindssearch" component={KindsSearch}/>
	      <Route path="/kindslistcomponent" component={KindsListComponent}/>	
	      
	      	      <Route path="/login" component={Login}/>
				<Route path="/register" component={Register}/>
	    </div>
      
	      <ul id="app_footer">
	        <li><Link to="/"><i className="icon iconfont">&#xe625;</i><span>首页</span></Link></li>
	        <li><Link to="/kinds"><i className="icon iconfont">&#xe6f5;</i><span>分类</span></Link></li>
	        <li><Link to="/goShopping"><i className="icon iconfont">&#xe6c1;</i><span>逛</span></Link></li>
	        <li><Link to="/goodsCar"><i className="icon iconfont">&#xe670;</i><span>购物车</span></Link></li>
	        <li><Link to="/my"><i className="icon iconfont">&#xe705;</i><span>我的</span></Link></li>
	      </ul>
      
    </div>
  </Router>
    );
  }
}

export default App;
