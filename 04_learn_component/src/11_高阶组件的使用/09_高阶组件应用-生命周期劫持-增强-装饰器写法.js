import React, { PureComponent } from 'react';
// 引入一个装饰器组件
import MyHome  from './homezsq.jsx'


export default class App extends PureComponent {
  render() {
    return (
      <div>
        <MyHome realName="我是装饰器的home---" />
      </div>
    )
  }
}

