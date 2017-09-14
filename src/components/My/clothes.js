import React from 'react';
import '../../style/my/clothes.css'
class Clothes extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="clothesBox">
                <div className="clothes">
                    <img className="clothes-logo" src="//img11.static.yhbimg.com/yhb-img01/2017/09/14/11/01a593df8a23d66f18650652bae53d597a.jpg?imageView2/3/w/640/h/200/q/60" />
                    <p className="clothes-title">为你优选新品</p>
                    <ul className="clothes-list">
                        <li>
                            <a>
                                <img src="//img11.static.yhbimg.com/goodsimg/2016/11/16/15/0137536748924345e8d8e7294900297424.jpg?imageMogr2/thumbnail/235x314/extent/235x314/background/d2hpdGU=/position/center/quality/60/format/webp" />
                                <p>BILLIONAIRE BOYS CLUB   字母图案印花夹克</p>
                                <p>￥1629.00</p>
                            </a>
                        </li>
                        <li>
                            <a>
                                <img src="//img11.static.yhbimg.com/goodsimg/2016/11/16/15/0137536748924345e8d8e7294900297424.jpg?imageMogr2/thumbnail/235x314/extent/235x314/background/d2hpdGU=/position/center/quality/60/format/webp" />
                                <p>BILLIONAIRE BOYS CLUB   字母图案印花夹克</p>
                                <p>￥1629.00</p>
                            </a>
                        </li>
                        <li>
                            <a>
                                <img src="//img11.static.yhbimg.com/goodsimg/2016/11/16/15/0137536748924345e8d8e7294900297424.jpg?imageMogr2/thumbnail/235x314/extent/235x314/background/d2hpdGU=/position/center/quality/60/format/webp" />
                                <p>BILLIONAIRE BOYS CLUB   字母图案印花夹克</p>
                                <p>￥1629.00</p>
                            </a>
                        </li>
                        <li>
                            <a>
                                <img src="//img11.static.yhbimg.com/goodsimg/2016/11/16/15/0137536748924345e8d8e7294900297424.jpg?imageMogr2/thumbnail/235x314/extent/235x314/background/d2hpdGU=/position/center/quality/60/format/webp" />
                                <p>BILLIONAIRE BOYS CLUB   字母图案印花夹克</p>
                                <p>￥1629.00</p>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className = "clothesToTop">
                   <div className = "toTop-lt">
                       <a>登录</a>
                       <a>注册</a>
                   </div>
                   <div className = "toTop-rt">       
                     Back to top
                     <i className = "iconfont iconfont-arrow2-top"></i>
                   </div>
                </div>
                <p className = "clothesFooter">CopyRight©2007-2016 南京新与力文化传播有限公司</p>
            </div>
        )
    }
}
export default Clothes
