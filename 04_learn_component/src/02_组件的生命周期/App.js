import React, { Component } from 'react';
// 介绍几个常用的生命周期函数
// 组件1
class Cpn extends Component {
  render() {
    return <h2>我是Cpn组件</h2>
  }

  componentWillUnmount() {
    // 1.在此方法中执行必要的清理操作
    // 2.例如，清楚timer,取消网络请求或清除在componentDidMount中创建的订阅
    console.log("调用了Cpn的componentWillUnmount方法");
  }
}
// 根组件
export default class App extends Component {

  constructor() {
    super();

    this.state = {
      counter: 0,
      isShow: true
    }

    console.log("执行了App组件的constructor方法");
  }
  // 每次setState的时候都会执行render方法
  render() {
    console.log("执行了App组件的render方法");

    return (
      <div>
        我是App组件
        <h2>当前计数: {this.state.counter}</h2>
        <button onClick={e => this.increment()}>+1</button>
        <hr/>
        <button onClick={e => this.changeCpnShow()}>切换</button>
        {/* 在这里调用了Cpn组件，嵌套了一个儿子 */}
        {this.state.isShow && <Cpn/>}
      </div>
    )
  }

  increment() {
    let { counter } = this.state
    this.setState({
      counter: counter + 1
    })
  }

  changeCpnShow() {
    this.setState({
      isShow: !this.state.isShow
    })
  }

  componentDidMount() {
    console.log("执行了App组件的componentDidMount方法");
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // 1.首次渲染不会执行此方法
    // 2.当组件更新后，可以在此处对DOM进行操作
    // 3.如果你对更新后的
    // 4.snapshot
    console.log("执行了App组件的componentDidUpdate方法");
  }
}
