import React, { Component } from 'react';
import './style.css'
// import两个子组件
import NavBar from './NavBar';
import NavBar2 from './NavBar2';

// App父组件

export default class App extends Component {

  render() {
    const leftJsx = <span>aaa</span>;
    return (
      <div>
        {/* 第一个子组件 */}
        {/* 核心api  this.props.children  */}
        <NavBar name="" title="" className="">
          <span>aaa</span>
          <strong>bbb</strong>
          <a href="/#">ccc</a>
        </NavBar>
        <hr/>
        {/* 第二个子组件 */}
        {/* 第二种方式，利用props传递
        <my-component a={xxx}></my-component>
        xxx,除了普通的字符串了，也可以是组件，也可以是组件
        */}
        <NavBar2 leftSlot={leftJsx} centerSlot={<strong>bbb</strong>} rightSlot={<a href="/#">ccc</a>}/>
      </div>
    )
  }
}
/* 
还有一个api是 render Props

https://www.jianshu.com/p/5d20dc263231
如果需要用到react中slot可以参考这篇文章写的非常不错...

*/