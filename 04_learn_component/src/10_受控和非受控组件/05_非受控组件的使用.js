import React, { PureComponent, createRef } from 'react'

export default class App extends PureComponent {
  constructor(props) {
    super(props);

    this.usernameRef = createRef();
  }

  render() {
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <label htmlFor="username">
            用户: 
            <input type="text" id="username" ref={this.usernameRef}/>
          </label>
          <input type="submit" value="提交"/>
        </form>
      </div>
    )
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.usernameRef.current.value);
  }
}
/* 
非受控组件，总结为一句话就是。用到时候再去拿



// 受控组件用state来管理，时刻改变state的值
// 非受控组件就是到了最后才去拿通过this.xxxx.current这个api来拿去

*/