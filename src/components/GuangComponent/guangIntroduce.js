import React from 'react';
import { connect } from 'react-redux';   
import '../../style/GuangCss/guangIntroduce.css'
class Introduce extends React.Component {
    constructor() {
        super();
    }
    componentDidMount(){     
        console.log(this.props);
        this.props.select(this.props.flag)
    }
    render() {
        console.log(this.props.detailData.largeimgurls);
        console.log(this.props.listData);
        return (
            <div className="introduce">
                <h3 className = "txt1">{this.props.detailData.name}</h3>
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
                <img className = "clothesPic" src = {this.props.detailData.largeimgurls?this.props.detailData.largeimgurls[0]:""} alt = ""/>
                <p className = "clothesDetail">{this.props.detailData.longname}</p>
            </div>      
        )
    }
}
// export default Introduce
function mapStateToProps(state) {
        console.log(state.goShopping.detailData);
        return {
            detailData: state.goShopping.detailData,
            listData: state.goShopping.listData
        }
    }
    function mapDispatchToProps(dispatch) {
        return {
        select(id) {
            fetch("/api/getdetail").then((res) => {
                    return res.json();
                }).then((data) => {
                    console.log(data[0].products[id])
                    dispatch({
                        type:"SELECT",
                        payload:data[0].products[id]
                    })
                })
            }
        }
    }
    export default connect(mapStateToProps, mapDispatchToProps)(Introduce)