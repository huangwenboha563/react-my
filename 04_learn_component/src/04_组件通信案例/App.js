import React, { Component } from 'react';
// import子组件
import TabControl from './TabControl';
import './style.css'

// App 父组件
export default class App extends Component {
  constructor(props) {
    super(props);
    this.titles = ['新款', '精选', '流行'];
    this.state = {
      currentTitle: "新款",
      // currentIndex: 0
    }
  }

  render() {
    const {currentTitle} = this.state;
    return (
      <div>
        <TabControl itemClick={index => this.itemClick(index)} titles={this.titles} />
        <h2>{currentTitle}</h2>
      </div>
    )
  }

  itemClick(index) {
    // index 是从TabControl传递过来的...
    this.setState({
      currentTitle: this.titles[index]
    })
  }
}
