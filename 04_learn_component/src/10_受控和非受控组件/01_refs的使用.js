import React, { PureComponent, createRef, Component } from 'react';

class Counter extends PureComponent {
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
    this.setState({
      counter: this.state.counter + 1
    })
  }
}
// 父组件
export default class App extends PureComponent {

  constructor(props) {
    super(props);

    this.titleRefSecond = createRef();
    this.counterRef = createRef();
    this.titleEl = null;
  }

  render() {
    return (
      <div>
        {/*第一种方式*/}
        {/* <h2 ref=字符串/对象/函数>Hello React</h2> */}
        <h2 ref="titleRefFirst">Hello React</h2>      


        {/*第二种方式*/}
        {/* 目前React推荐的方式 */}
        <h2 ref={this.titleRefSecond}>Hello React</h2>       






        {/*第三种方式*/}
        <h2 ref={arg => this.titleEl = arg}>Hello React</h2> 




        <button onClick={e => this.changeText()}>改变文本</button>
        <hr/>



        
        <Counter ref={this.counterRef}/>
        <button onClick={e => this.appBtnClick()}>App按钮</button>
      </div>
    )
  }

  changeText() {
    // 1.使用方式一: 字符串(不推荐, 后续的更新会删除)
    this.refs.titleRefFirst.innerHTML = "Hello Coderwhy";
    // 2.使用方式二: 通过createRef
    this.titleRefSecond.current.innerHTML = "Hello JavaScript";
    // 3.使用方式三: 回调函数方式
    this.titleEl.innerHTML = "Hello TypeScript";
  }
  // ref加载组件上
  appBtnClick() {
    this.counterRef.current.increment();
  }
}

/*class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Counter title={}></Counter>
      </div>
    )
  }
}*/
