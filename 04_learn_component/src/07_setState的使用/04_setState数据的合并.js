import React, { Component } from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello World",
      name: "coderwhy"
    }
  }

  render() {
    return (
      <div>
        <h2>{this.state.message}</h2>
        <h2>{this.state.name}</h2>
        <button onClick={e => this.changeText()}>改变文本</button>
      </div>
    )
  }

  changeText() {
    // 了解真相你才能获得真正的自由，这样设置完之后页面上的name还是会显示的，因为源码里面会合并。
    this.setState({
      message: "你好啊,李银河"
    });
    /*
    *
    *
    * 如果点击的时候想把message改变，不需要把name也带上。源码里面会合并的
    this.setState({
      message: "你好啊,李银河",
      name: 'coderwhy'
    });
    *
    *
    */
    // 源码里面就是这样做的
    // Object.assign({}, this.state, {message: "你好啊,李银河"})
  }
}
