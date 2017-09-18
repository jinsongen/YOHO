import React from 'react';
import '../../style/GuangCss/guangBrand.css'

class Brand extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="brandBox">
                <div className="brand">
                    <h3>相关品牌</h3>
                    <ul className="brandList">
                        <li>
                            <img src="//img12.static.yhbimg.com/brandLogo/2016/08/26/14/02642c7430a38c7ae46dfaccb82dd7fb32.jpg?imageMogr2/thumbnail/100x100/extent/100x100/background/d2hpdGU=/position/center/quality/60" alt="" />
                            <p>converse</p>
                        </li>
                        <li>
                            <img src="//img12.static.yhbimg.com/brandLogo/2016/08/26/14/02642c7430a38c7ae46dfaccb82dd7fb32.jpg?imageMogr2/thumbnail/100x100/extent/100x100/background/d2hpdGU=/position/center/quality/60" alt="" />
                            <p>converse</p>
                        </li>
                        <li>
                            <img src="//img12.static.yhbimg.com/brandLogo/2016/08/26/14/02642c7430a38c7ae46dfaccb82dd7fb32.jpg?imageMogr2/thumbnail/100x100/extent/100x100/background/d2hpdGU=/position/center/quality/60" alt="" />
                            <p>converse</p>
                        </li>
                        <li>
                            <img src="//img12.static.yhbimg.com/brandLogo/2016/08/26/14/02642c7430a38c7ae46dfaccb82dd7fb32.jpg?imageMogr2/thumbnail/100x100/extent/100x100/background/d2hpdGU=/position/center/quality/60" alt="" />
                            <p>converse</p>
                        </li>
                    </ul>
                </div>

                <ul className="brandAdver">
                    <li>
                        <img className="Adver-img" src="//img13.static.yhbimg.com/article/2017/09/15/14/02fab5715b3f64394841ed30a2c60803d7.jpg?imageView2/2/w/279/h/175/q/60" alt="" />
                        <div className = "Adver-txt">
                            <p>DC 9月品牌日，满两件7折，三件6折，更有无门槛现金券领取</p>
                            <p>
                                <i className = "iconfont iconfont-dengdai"></i>
                                <span>9月15日 15:10</span>
                            </p>
                        </div>
                    </li>
                    <li>
                        <img className="Adver-img" src="//img13.static.yhbimg.com/article/2017/09/15/14/02fab5715b3f64394841ed30a2c60803d7.jpg?imageView2/2/w/279/h/175/q/60" alt="" />
                        <div className = "Adver-txt">
                            <p>DC 9月品牌日，满两件7折，三件6折，更有无门槛现金券领取</p>
                            <p>
                                <i className = "iconfont iconfont-dengdai"></i>
                                <span>9月15日 15:10</span>
                            </p>
                        </div>
                    </li>
                    <li>
                        <img className="Adver-img" src="//img13.static.yhbimg.com/article/2017/09/15/14/02fab5715b3f64394841ed30a2c60803d7.jpg?imageView2/2/w/279/h/175/q/60" alt="" />
                        <div className = "Adver-txt">
                            <p>DC 9月品牌日，满两件7折，三件6折，更有无门槛现金券领取</p>
                            <p>
                                <i className = "iconfont iconfont-dengdai"></i>
                                <span>9月15日 15:10</span>
                            </p>
                        </div>
                    </li>
                    
                </ul>
                <div className = "brand-weChat">
                    <i className = "iconfont iconfont-share-weixin"></i>
                    <div className = "weChat-txt">
                        <p>微信搜索公众号“有货YOHOBUY”</p>
                        <p>你购物，我买单，关注公众号即可赢免单</p>
                    </div>
                </div>
                <div className = "brand-see">
                    <img src = "//img12.static.yhbimg.com/goodsimg/2017/06/12/14/0275f69d0f42757294e9f7fcf148f5e7d4.jpg?imageView2/2/interlace/1/q/60" alt = ""/>
                    <div className = "see-txt">
                        <span>66人点赞</span>
                        <span>27457人看过</span>
                    </div>
                </div>
                <div className = "brand-comment">
                    <span>评论0</span>
                </div>
            </div>
        )
    }
}
export default Brand
