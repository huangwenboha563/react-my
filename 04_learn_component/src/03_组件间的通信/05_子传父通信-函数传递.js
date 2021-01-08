import React, { Component } from 'react';


class CounterButton extends Component {
  render() {
    const {onClick,name} = this.props;
    return (
        <div>
          <button onClick={onClick}>+1</button>
          {name}
        </div>
    )
  }
}


export default class App extends Component {
  // 1.初始化内部数据
  // 2.为事件绑定this
  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    }
  }

  render() {
    return (
      <div>
        <h2>当前计数: {this.state.counter}</h2>
        <button onClick={e => this.increment()}>+</button>
        {/*子组件*/}
        <CounterButton onClick={e => this.increment()} name="why"/>
      </div>
    )
  }

  increment() {
    this.setState({
      counter: this.state.counter + 1
    })
  }
}
