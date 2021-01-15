import axios from 'axios';
// bindActionCreators 是什么》？为什么这里没有用到这个api呢
import {
  ADD_NUMBER,
  SUB_NUMBER,
  INCREMENT,
  DECREMENT,
  CHANGE_BANNERS,
  CHANGE_RECOMMEND,
  FETCH_HOME_MULTIDATA
} from './constants.js';

// export function addAction(num) {
//   return {
//     type: "ADD_NUMBER",
//     num
//   }
// }

// export const addAction = (num) => {
//   return {
//     type: "ADD_NUMBER",
//     num
//   }
// }


// es6的语法简写方式



export const addAction = num => ({
  type: ADD_NUMBER,
  num
});

export const subAction = num => ({
  type: SUB_NUMBER,
  num
});

export const incAction = () => ({
  type: INCREMENT
});

export const decAction = () => ({
  type: DECREMENT
});


// 轮播图和推荐的action
export const changeBannersAction = (banners) => ({
  type: CHANGE_BANNERS,
  banners
});

export const changeRecommendAction = (recommends) => ({
  type: CHANGE_RECOMMEND,
  recommends
});


// redux-thunk中定义的 action函数，到时候dispatch需要传递这个
// dispatch
// 难道thunk的目的就是为了把异步代码换个位置吗？
// what fuck  难道thunk的目的就是为了把异步代码搬个家吗，把thunk的代码搬到actionCreators吗
export const getHomeMultidataAction = (dispatch, getState) => {
  // dispatch 这个参数是在上一步dispatch的时候自动传递过来的额
  // getState ,如果这次网络请求需要依赖上一次的state可以从getState拿。
  // 把网络请求相关的代码放在这里....
  axios({
    url: "http://123.207.32.32:8000/home/multidata",
  }).then(res => {
    const data = res.data.data;
    // changeBannersAction(data.banner.list)的结果是个对象object，总之最后派发的肯定是一个对象
    dispatch(changeBannersAction(data.banner.list));
    // 一旦dispatch是个对象就会走我们的reducer
    dispatch(changeRecommendAction(data.recommend.list));
  })
}


// redux-saga拦截的action
export const fetchHomeMultidataAction = {
  type: FETCH_HOME_MULTIDATA
}

