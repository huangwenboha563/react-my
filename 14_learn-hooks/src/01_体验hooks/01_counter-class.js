import React, { PureComponent } from 'react'
/*
*  最基本的传统的定义一个类组件实现+1，-1
*
*/
export default class CounterClass extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    }
  }

  render() {
    // 只要state中的数据发生变化就会执行render函数
    console.log("class counter渲染");
    return (
      <div>
        <h2>当前计数: {this.state.counter}</h2>
        <button onClick={e => this.increment()}>+1</button>
        <button onClick={e => this.decrement()}>-1</button>
      </div>
    )
  }

  increment() {
    this.setState({counter: this.state.counter + 1})
  }

  decrement() {
    this.setState({counter: this.state.counter - 1})
  }
}
