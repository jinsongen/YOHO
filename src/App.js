import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Affix, Button } from 'antd';
import './style/common.css'
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
import Guang from './components/GuangComponent/guang';
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
				<Route path="/guang/:id" component={Guang}/>
	    </div>
      
	      
      
    </div>
  </Router>
    );
  }
}

export default App;
