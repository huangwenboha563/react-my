// import React, { Component } from 'react';
import React, { Component,PureComponent } from 'react';


class ChildCpn extends Component {
  // 构造器可以不用写
  constructor() {
    super();
  }

  componentWillMount() {

  }

  componentDidMount() {
    console.log('儿子进入生命周期--我执行了')
    console.log(this.props, "componentDidMount");
  }

  render() {
    // console.log(this.props, "儿子render");
    const {name, age, height} = this.props;
    return (
      <h2>子组件展示数据: {name + " " + age + " " + height}</h2>
    )
  }
}

export default class App extends Component {
  state = {
    count: 0
  }
  add = () => {
    console.log(111);
    this.setState({
      count: this.state.count + 1
    })
  }
  render() {
    return (
      <div>
        {this.state.count}
        <button onClick={this.add}>+1</button>
        <ChildCpn key={this.state.count} name="why" age="18" height="1.88"/>
        <ChildCpn name="kobe" age="40" height="1.98"/>
      </div>
    )
  }
}
