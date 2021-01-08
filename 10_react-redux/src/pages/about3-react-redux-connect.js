import React from 'react';
// import { connect } from '../utils/connect';
// 不需要发生任何变化，只需要把进入自己写的那个connect换成第三方的那个即可
import { connect } from 'react-redux';

import {
  decAction,
  subAction
} from "../store/actionCreators";

function About(props) {
  console.log("About页面重新渲染了");
  return (
    <div>
      <hr />
      <h1>About</h1>
      <h2>当前计数: {props.counter}</h2>
      <button onClick={e => props.decrement()}>-1</button>
      <button onClick={e => props.subNumber(5)}>-5</button>
      <h1>Banner</h1>
      <ul>
        {
          props.banners.map((item, index) => {
            return <li key={item.acm}>{item.title}</li>
          })
        }
      </ul>
      <h1>Recommend</h1>
      <ul>
        {
          props.recommends.map((item, index) => {
            return <li key={item.acm}>{item.title}</li>
          })
        }
      </ul>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    banners: state.banners,
    recommends: state.recommends,
    counter: state.counter
  }
};

const mapDispatchToProps = dispatch => {
  return {
    decrement: function () {
      dispatch(decAction());
    },
    subNumber: function (num) {
      dispatch(subAction(num))
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(About);
