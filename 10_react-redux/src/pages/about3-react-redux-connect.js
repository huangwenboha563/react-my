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
      {/*在home3-react-redux-connect中改变store中的值，在这个页面去拿，去遍历，能拿到说明home3-react-redux-connect中成功了*/}
      {/*此时在Chrome控制台的redux插件中还是看不到任何redux相关的数据的...*/}
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
    // 在这里获取 轮播图和推荐列表。如果想从store中拿数据就在这拿~~~
    banners: state.banners,
    recommends: state.recommends,
    counter: state.counter
  }
};

const mapDispatchToProps = dispatch => {
  // 如果这个组件中想改变store中的state值在这里修改...
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
