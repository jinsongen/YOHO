import React from 'react'
import Header from './DetailComponents/DetailHeader'
import GoodsImg from './DetailComponents/GoodsLunbo'
import '../style/Detailcss/Detail.css'
export default class Detail extends React.Component {
	render() {
		console.log(this.props);
		return (
			<div id="Detail-wrap">
				<Header/>
				<GoodsImg/>
				<div className="detail-goodsinfo">
					<p className="title"><span className="name">SYS.tag 纯色金属夹</span></p>
					<p className="goods-price"><span className="price">¥49.00</span></p>
				</div>
				<div className="eva-pro">
					<span className="evaluate">商品评价</span>
					<span className="border"></span>
					<span className="problom">常见问题</span>
				</div>
				<ul className="pro-box">
					<li className="question">
						?商品都是正品吗?
					</li>
					<li className="answer">
						√有货www.yohobuy.com所售的商品均经品牌授权，正品保障，支持专柜验货，与您亲临商场选购的商品一样享受相同的质量保证，请您放心购买。
					</li>
				</ul>
				<div className="more iconfont">
					查看更多&#xe63d;
				</div>
				<p className="op-row">
						<span>Hi,</span>
						<span className="user-name">131****8944</span>
						<span>退出</span>
                        <span className="back-to-top">
                            Back to top
                            <i className="iconfont">&#xe684;</i>
                        </span>
                        </p>
				<p className="copyright">
                        CopyRight©2007-2016 南京新与力文化传播有限公司
                </p>
                <div className="detail-footer">
                	<div><span className="iconfont">&#xe670;</span><span>购物车</span></div>
                	<div><span className="iconfont">&#xe66a;</span><span>品牌店铺</span></div>
                	<div><span className="iconfont">&#xe649;</span><span>收藏</span></div>
                	<button>加入购物车</button>
                </div>
			</div>
		)
	}
} 