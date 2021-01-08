import React, { Component } from 'react';
// 第一种定义方式类组件
// export default class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       message: "你好啊,李银河"
//     }
//   }

//   render() {
//     return (
//       <div>
//         <span>我是App组件</span>
//         {/* alt + shift + f: 对代码进行格式化 */}
//         <h2>{this.state.message}</h2>
//       </div>
//     )
//   }
// }
// 第二种定义方式函数式组件
/**
 * 函数式组件的特点:
 *  1.没有this对象 // 没有this对象就没有this绑定相关的东西
 *  2.没有内部的状态 // 没有state（hooks的出现可以让函数式组件里面有自己的状态,也就是vue里面的那个data）
 */
export default function App() { // 首字母大写
  return (
    <div>
      <span>我是function的组件: App组件</span>
      <h2>counter</h2>
      <button>+1</button>
      <h2>你好啊,王小波</h2>
    </div>
  )
}
