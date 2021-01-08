import React, { PureComponent } from 'react';
// 导入store
import store from '../store/ha手动和redux联系'; // 如果是index.js省略js

import {
  addAction
} from '../store/actionCreators'

export default class Home extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      counter: store.getState().counter // 拿到store里面的counter
    }
  }
  // 点击加1  加5的时候数字其实变了，但是没有render，所以要在componentDidMount生命周期中，重新setState
  componentDidMount() {
    // store.subscribe订阅store的修改，state变化了总得知道吧
    this.unsubscribue = store.subscribe(() => {
      this.setState({
        counter: store.getState().counter // 重新赋值，这样页面才能看到变化...
      })
    })
  }
  // 取消订阅 //一定要在componentWillUnmount中取消订阅
  componentWillUnmount() {
    this.unsubscribue();
  }

  render() {
    return (
      <div>
        <h1>Home</h1>
        <h2>当前计数: {this.state.counter}</h2>
        <button onClick={e => this.increment()}>+1</button>
        <button onClick={e => this.addNumber(5)}>+5</button>
      </div>
    )
  }

  increment() {
    store.dispatch(addAction(1));
  }

  addNumber(num) {
    store.dispatch(addAction(num));
  }
}
