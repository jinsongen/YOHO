import React from 'react';
import '../../style/GuangCss/guangIntroduce.css'
class Introduce extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="introduce">
                <h3 className = "txt1">听说现在睡裤很流行外穿！？</h3>
                <div className = "notice"> 
                    <div className = "notice-lt">
                        <p className = "notice-timer">
                            <i className = "iconfont iconfont-dengdai"></i>
                            <span>09月15日 21:50</span>
                            <i className = "iconfont iconfont-yanjing eyes"></i>
                            <span className>13800</span>
                        </p>
                    </div>
                </div>
                <img className = "clothesPic" src = "//img11.static.yhbimg.com/goodsimg/2017/09/13/14/01858c053b4de7652ba9ab23257b0417e4.jpg?imageView2/2/w/640/h/640/q/60" alt = ""/>
                <p className = "clothesDetail">Stussy 字母图案印花卫衣，经典百搭，胸前有字母印花，材质使用了舒适的棉质，面料透气舒适，由整齐车线缝制而成的底边，走线均匀细密，彰显良好工艺品质。下身是Improper 格纹休闲长裤，经典的格纹元素，舒适的面料和修饰腿型的版型让人不能错过，整体造型玩味十足，街头感很强！</p>
            </div>      
        )
    }
}
export default Introduce
