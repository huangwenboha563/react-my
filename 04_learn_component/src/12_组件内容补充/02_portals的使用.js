import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
/* 
门户

*/
class Modal extends PureComponent {
  render() {
    return ReactDOM.createPortal(
      this.props.children,
      document.getElementById("modal") // index.html里面有个id是modal的元素
    )
  }
}

class Home extends PureComponent {
  render() {
    return (
      <div>
        <h2>Home</h2>
        <Modal>
          <h2>Title</h2>
          <h2>body</h2>
          <h2>footer</h2>
        </Modal>
      </div>
    )
  }
}

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Home/>
      </div>
    )
  }
}
/*
*
*  试想如果渲染一个弹窗？？？home里面有个弹窗，想弹到页面的正中间
*
*/
