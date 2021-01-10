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
        <button onClick={e => this.increment(e)}>+</button>
        <hr/>
        <button onClick={this.incrementTest()}>+</button>
        {/*子组件*/}
        <CounterButton onClick={e => this.increment()} name="why"/>
      </div>
    )
  }

  increment(e) {
    // 查看这篇文章，怪不得 e e.target在控制台看是null但是却能打出来
    // e.persist()
    console.log(e);
    console.log(e.target);
    console.log(e.target.innerHTML);
    this.setState({
      counter: this.state.counter + 1
    })
  }
  incrementTest() {
    return (event) => {
      console.log(event);
      console.log(event.target.innerHTML);
      this.setState({
        counter: this.state.counter + 1
      })
    }

  }
}
