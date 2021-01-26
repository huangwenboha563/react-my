import React, { PureComponent } from 'react'



export default class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      username: ""
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          {/*for是关键词，所以在jsx中用htmlFor*/}
          <label htmlFor="username">
            用户:
            {/* 受控组件 */}
            {/*demo1*/}
            {/*<input type="text" id="username" onChange={(e) => this.handleChange(e)} value={this.state.username} />*/}
            {/*demo2,关于事件对象的传递*/}
            <input type="text" id="username" onChange={this.handleChangeAgain} value={this.state.username} />
            {/*demo3*/}
            {/* <input type="text" id="username" onChange={this.handleChangeSecond('username')} value={this.state.username} />*/}
          </label>
          <input type="submit" value="提交" />
        </form>
      </div>
    )
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.username);
  }
  // 第一种用法，如果用户名还有别的input，继续加对应的onChange事件
  handleChange(event) {
    this.setState({
      username: event.target.value
    })
  }
  // 第二种用法传递事件对象 //  handleChangeAgain不带()。只能在这里接受event对象
  handleChangeAgain = (event) =>  {
    this.setState({
      username: event.target.value
    })
  }
  // 第三种用法（在网上看到的第二种用法） // handleChangeSecond('参数') // 带花括号，既能接受参数还能接受事件对象
  handleChangeSecond(dataType) {
    console.log(dataType);
    return (event) => {
      this.setState({
        [dataType]: event.target.value
      })
    }
  }
}



