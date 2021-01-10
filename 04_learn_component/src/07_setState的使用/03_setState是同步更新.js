import React, { Component } from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello World"
    }
  }

  render() {
    return (
      <div>
        <h2>{this.state.message}</h2>
        <button onClick={e => this.changeText()}>改变文本</button>
        <button id="btn">改变文本2</button>
      </div>
    )
  }

  componentDidMount() {
    // 情况2
    document.getElementById("btn").addEventListener("click", (e) => {
      this.setState({
        message: "你好啊,李银河"
      })
      console.log(this.state.message);
    })

    // this.setState({
    //   message: "你好啊,李银河"
    // })
    // console.log(this.state.message);
  }

  changeText() {
    // 情况一: 将setState放入到定时器中
    setTimeout(() => {
      this.setState({
        message: "你好啊,李银河"
      })
      console.log(this.state.message);
    }, 0);
  }
}




/* 
关于setState的异步还是同步的问题
1. setState都是异步的
2. 在两种情况下是同步的
（2.1，不通过onClick来点击，通过原生的document.getElementById,获取到，通过addEventListener来绑定点击事件，之后立刻获取stage）


 情况1：
 * 将setState放入一个setTimeout延迟函数中
 情况2：
 * 通过原生的dom事件比如点击一个按钮之后再去setState...

 看ppt总结
 1. 在生命周期中去setState和合成事件中，setState是异步的
 2. 在setTimeout或者原生dom事件中，setState是同步的。

 不能坚决的说它是异步的还是同步的
*/