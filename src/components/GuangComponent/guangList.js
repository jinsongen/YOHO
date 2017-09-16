import React from 'react';
import '../../style/GuangCss/guangList.css'
class List extends React.Component{
	constructor(){
		super();
	}
	render(){
		return(
			<div className = "list">
				<ul>
                    <li>
                        <img src = "//img12.static.yhbimg.com/goodsimg/2017/07/07/17/027713e0e4a078b8027bfae2bd27c08185.jpg?imageMogr2/thumbnail/152x204/extent/152x204/background/d2hpdGU=/position/center/quality/60" alt = ""/>
                        <div className = "list-rt">
                            <p>Stussy  字母图案印花卫衣</p>
                            <p>¥729</p>
                            <span className = "listCart">
                                <i className = "iconfont iconfont-cart2-selected" ></i>
                            </span>  
                        </div>
                    </li>
                </ul>
			</div>
		)
	}
}
export default List
