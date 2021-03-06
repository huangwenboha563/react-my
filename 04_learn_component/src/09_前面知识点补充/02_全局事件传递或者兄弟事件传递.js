/*
*
* 兄弟组件
*/
// PureComponent用来提高性能的，避免子组件没必要的render
import React, { PureComponent } from 'react';
// events是需要安装的通过npm yarn都可以

// react中有很多第三方的 "事件总线库"，这里以events为例
import { EventEmitter } from 'events';

// 事件总线: event bus
const eventBus = new EventEmitter();



// 类似于vue中的eventbus那个概念
// Home组件
class Home extends PureComponent {
  componentDidMount() {
    // 订阅......
    eventBus.addListener("sayHello", this.handleSayHelloListener);
  }
  // 一定要在这里进行取消订阅，如果不取消订阅就会造成内存泄漏。...闭包的内存泄漏...  还有各种定时器等。。。都要在这里取消...
  // 比如我们的home组件...是别人的一个自组件。Home频繁的显示和不显示的时候，如果不在componentWillUnmount中给去掉订阅。的 话就会造成内存泄漏...this找不到...
  componentWillUnmount() {
    eventBus.removeListener("sayHello", this.handleSayHelloListener);
  }

  handleSayHelloListener(num, message) {
    console.log(num, message);
  }

  render() {
    return (
      <div>
        Home

      </div>
    )
  }
}


// Profile组件
class Profile extends PureComponent {
  render() {
    return (
      <div>
        Profile
        <button onClick={e => this.emmitEvent()}>点击了profile按钮</button>
      </div>
    )
  }
  // 发布---
  emmitEvent() {
    eventBus.emit("sayHello", 123, "Hello Home");
  }
}



// 根组件
export default class App extends PureComponent {
  render() {
    return (
      <div>
        {/*Home和Profile是兄弟组件   Profile ----传递了数据-----> Home */}
        <Home/>
        <Profile/>
      </div>
    )
  }
}

/* 
总结一句话：
兄弟组件之间的通信......。

要么依赖共有的父亲
要么以来发布订阅模式，和vue一样的概念。



*/
