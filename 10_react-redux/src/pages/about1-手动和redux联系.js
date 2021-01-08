import React, { PureComponent } from 'react';
// 引入store
import store from '../store/ha手动和redux联系';
// 引入对应的action，要派发
import {
  subAction
} from "../store/actionCreators";

export default class AboutRedux extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      counter: store.getState().counter
    }
  }

  componentDidMount() {
    this.unsubscribue = store.subscribe(() => {
      this.setState({
        counter: store.getState().counter
      })
    })
  }

  componentWillUnmount() {
    this.unsubscribue();
  }

  render() {
    return (
      <div>
        <hr/>
        <h1>About</h1>
        <h2>当前计数: {this.state.counter}</h2>
        <button onClick={e => this.decrement()}>-1</button>
        <button onClick={e => this.subNumber(5)}>-5</button>
      </div>
    )
  }

  decrement() {
    store.dispatch(subAction(1));
  }

  subNumber(num) {
    store.dispatch(subAction(num));
  }
}
