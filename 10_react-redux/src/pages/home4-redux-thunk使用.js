import React, { PureComponent } from 'react';

// import {connect} from '../utils/connect';
import { connect } from 'react-redux';


import {
  incAction,
  addAction,
  getHomeMultidataAction
} from '../store/actionCreators'

class Home extends PureComponent {
  componentDidMount() {
    // 难道redux-thunk的目的就是为了让异步代码换个位置？？
    this.props.getHomeMultidata();
  }

  render() {
    return (
      <div>
        <h1>Home</h1>
        <h2>当前计数: {this.props.counter}</h2>
        <button onClick={e => this.props.increment()}>+1</button>
        <button onClick={e => this.props.addNumber(5)}>+5</button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  counter: state.counter
})

const mapDispatchToProps = dispatch => ({
  // incAction()的结果是个对象
  increment() {
    dispatch(incAction());
  },
  addNumber(num) {
    dispatch(addAction(num));
  },
  getHomeMultidata() {
    // getHomeMultidataAction传递一个函数，传入的这个函数会被主动调用~~~~~~~~~
    // 通常情况下dispatch派发的是一个对象，如果用thunk就可以派发一个方法了，getHomeMultidataAction异步操作在这个方法里面
    dispatch(getHomeMultidataAction);
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
