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
          <label htmlFor="username">
            用户:
            {/* 受控组件 */}
            <input type="text" id="username" onChange={e => this.handleChange(e)} value={this.state.username} />
            {/* <input type="text" id="username" onChange={this.handleChangeSecond('username')} value={this.state.username} /> */}
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
  // 第一种用法
  handleChange(event) {
    this.setState({
      username: event.target.value
    })
  }
  // 第二种用法（在网上看到的第二种用法）
  handleChangeSecond(dataType) {
    return (event) => {
      this.setState({
        [dataType]: event.target.value
      })
    }
  }



}
