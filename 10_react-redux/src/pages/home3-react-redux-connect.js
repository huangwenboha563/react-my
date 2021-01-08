import React, { PureComponent } from 'react';

// import {connect} from '../utils/connect';
import { connect } from 'react-redux';
/*
*  在home里面发送的ajax请求的数据，在About里面拿的
*  就像在Home和About里面都在使用counter一样...
*  function 组件直接通过props拿
*  class组件通过this.props拿
*  组件中的异步操作....
*  由此引出redux-thunk  redux-saga 中间件
*
*/
import axios from 'axios';

import {
  incAction,
  addAction,
  changeBannersAction,
  changeRecommendAction
} from '../store/actionCreators'

class Home extends PureComponent {
  componentDidMount() {
    axios({
      url: "http://123.207.32.32:8000/home/multidata",
    }).then(res => {
      const data = res.data.data;
      /* 
      this.props
      this.props
      */
      this.props.changeBanners(data.banner.list);
      this.props.changeRecommends(data.recommend.list);
    })
  }

  render() {
    /* 
    this.props
    this.props
    this.props
    
    */
    return (
      <div>
        <h1>Home</h1>
        <h2>当前计数: {this.props.counter}</h2>
        <button onClick={e => this.props.increment()}>+1</button>
        <button onClick={e => this.props.addNumber(5)}>+5</button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  counter: state.counter
})

const mapDispatchToProps = dispatch => ({
  increment() {
    dispatch(incAction());
  },
  addNumber(num) {
    dispatch(addAction(num));
  },
  changeBanners(banners) {
    dispatch(changeBannersAction(banners));
  },
  changeRecommends(recommends) {
    dispatch(changeRecommendAction(recommends));
  }
})
/* 
connect是一个函数，返回的是一个高阶组件
var demo = connect(mapStateToProps, mapDispatchToProps)
demo是一个高阶组件（）

*/
export default connect(mapStateToProps, mapDispatchToProps)(Home);
/*
* 如何在redux中进行异步操作呢？
* 答案就是使用中间件 Middleware
* 学习express或koa框架中，会有一些中间件的概念
* 在这里框架中，中间件可以帮助我们在请求和响应之间嵌入一些操作的代码，比如cookie解析，日志记录，文件压缩等操作。
*
* redux中的中间件？
* redux中的中间件的的目的是dispatch的action和最终达到的reducer之间，扩展一些自己的代码。
* 比如日志记录、调用异步接口、添加代码调试功能等
* 这就是redux-thunk
* 默认情况下，dispatch的是一个对象。
* redux-thunk是如何做到让我们可以发送异步请求呢？
* redux-thunk，可以让dispatch（函数）
* 该函数会被调用(比如异步请求写在这里)，并且传给这个函数一个dispatch函数和getState函数。
* dispatch函数用于我们之后再次派发action
* getState函数考虑到我们只有的一些操作需要依赖原来的状态，用于我们可以获取之前的一些状态。
*
*
*
*
*/
