import React, { Component } from 'react'

export default class App extends Component {
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
        <button onClick={e => this.increment()}>+1</button>
      </div>
    )
  }

  increment() {
    // 1.setState本身被合并,这种操作不管执行多少次counter的结果都是1
    /* this.setState({
      counter: this.state.counter + 1
    });
    this.setState({
      counter: this.state.counter + 1
    });
    this.setState({
      counter: this.state.counter + 1
    }); */

    // 2.setState合并时进行累加，这样会一下子加3  源码里面其实是个do while循环
    /* 
    this.setState((prevState, props) => {
      return {
        counter: prevState.counter + 1
      }
    });
    this.setState((prevState, props) => {
      return {
        counter: prevState.counter + 1
      }
    });
    this.setState((prevState, props) => {
      return {
        counter: prevState.counter + 1
      }
    });
    // es6简写
    this.setState(prevState =>{
      counter: prevState.counter + 1
    })
    */

    // 3.依赖于prevState  prevState永远是最新的
    this.setState((prevState, props) => {
      return {
        counter: ++prevState.counter
      }

      /* 
      return {
        counter: prevState.counter + 1
      }
      
      */
    });
    // 阿里的一个react工程师推荐setState的时候直接写函数，就不用考虑那么多问题了。


    // 什么时候需要传递对象，什么时候传递函数
  }

}
