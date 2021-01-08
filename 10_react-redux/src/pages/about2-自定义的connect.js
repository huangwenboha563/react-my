import React from 'react';
import {connect} from '../utils/connect';

import {
    decAction,
    subAction
} from "../store/actionCreators";

function About(props) {
    // 显示 counter和点击减1，减5都是props传递过来的
    return (
        <div>
            <hr/>
            <h1>About</h1>
            <h2>当前计数: {props.counter}</h2>
            <button onClick={e => props.decrement()}>-1</button>
            <button onClick={e => props.subNumber(5)}>-5</button>
        </div>
    )
}
// state相关 state就是store里面的那个state
/*
* 解释：  mapStateToProps
*        mapDispatchToProps
* 这两个为什么要是一个方法呢，如果不是方法直接是对象的胡啊，就需要引入store，store依赖的地方太多了
*
*
*/
const mapStateToProps = state => {
    return {
        counter: state.counter
    }
};
// dispatch相关
const mapDispatchToProps = dispatch => {
    return {
        decrement: function () {
            dispatch(decAction());
        },
        subNumber: function (num) {
            dispatch(subAction(num))
        }
    }
};
// 每个组件依赖的state和dispatch都不一样，所以通过connect传递过去
// connect 传递两个参数 connect(mapStateToProps, mapDispatchToProps)是一个高阶组件
// connect(mapStateToProps, mapDispatchToProps)本身又是一个函数
export default connect(mapStateToProps, mapDispatchToProps)(About);
