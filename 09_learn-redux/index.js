/*
* 很显然像basic_redux.js那样组织代码的话，在项目中这个文件会越来越大
* 1. store是createStore创建的，createStore传递的是reducer，reducer是一个函数
*/
import store from './store/index.js'; // 后缀名.js必须写 不是webpack环境是node环境

import {
  addAction, // 是一个方法
  subAction, // 是一个方法
  incAction, // 是一个方法
  decAction // 是一个方法
} from './store/actionCreators.js';

store.subscribe(() => {
  console.log(store.getState());
})

// dispatch(这里传的是action)
/*
* addAction(10)    addAction是方法 addAction(10) 得到的是个真正的action对象
* 一定要理解 actionCreators，为什么要在这里单独弄个action，而且不直接用action，用方法再包裹一曾，
* 这样做的目的是为了传递参数。
* 不要直接dispatch一个对象，用方法包裹一曾，传递参数可以在reducer里面用
*
*  dispatch的是一个对象， addAction(10)   addAction(15)  subAction(8)  subAction(5) incAction()  decAction()都是方法调用，调用的结果是一个对象
*
*/
store.dispatch(addAction(10));
store.dispatch(addAction(15));
store.dispatch(subAction(8));
store.dispatch(subAction(5));
store.dispatch(incAction());
store.dispatch(decAction());

