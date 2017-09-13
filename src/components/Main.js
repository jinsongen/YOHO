import React from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import "../style/main.css"
//@import 'nprogress/nprogress';
class MainUI extends React.Component{
	constructor(){
		super();
	}
	componentDidMount() {
		this.props.fetchListData();
	}
	render(){
		return(
			<div id="main_wrap">
				主页
				<ul>
					{
						this.props.main_list.map((item, index)=>{
							return <li key={"h_l_" + index}>
								<img src={item.logo} />
								<span>{item.shop_name}</span>
								<span>{item.price}</span>
								<Link to={"/detail/" + item.shop_name}>详情</Link>
							</li>
						})
					}
				</ul>
			</div>
		)
	}
}
const mapState2Props = (state) => {
	return {
		main_list: state.main_list
	}
}

const mapDispatch2Props = (dispatch) => {
	return {
		fetchListData: () => {
			fetch("/api/getdata").then((res)=>{
				return res.json();
			}).then((json)=>{
				dispatch({
					type: "MAIN",
					payload: json
				})
			})
		}
	}
}

const Main = connect(mapState2Props, mapDispatch2Props)(MainUI);
export default Main
