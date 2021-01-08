// 1.导入redux(不能通过ES6的方式)
/*
*   dispatch      action      reducer(桥梁)
*
*
*/
// import/export 13.2.0开始支持
/*用node的方式来学习，先不和react结合就只说redux*/
/*
* yarn init 生成一个package.json文件
* yarn init -y（一路yes）
* yarn add redux (安装redux)
*
*/
// commonjs一种实现 -> nodejs
// 导入 redux （目前不能通过es6的import导入，这个跟node的版本有关系，不是绝对不一定，node的高版本才认识import）
// node中13.2版本以后才支持import
// 1.在package.json里面增加type:"module" 的配置  node --experimental-modules index.js在script里面加一个 --ex...的参数
/*
* reducer
* store
* actions
*/
const redux = require('redux');

const initialState = {
  counter: 0
}

// 1.reducer（纯函数）param1,原来的state param2 action 通过type来判断 state第一次么有值的，给一个初始化值
function reducer(state = initialState, action) {
  // 不要动人家原来的纯函数
  switch (action.type) {
    case "INCREMENT":
      return { ...state, counter: state.counter + 1 } // ...state里面如果是 {counter: 0}  counter: 1 就把counter: 0 给覆盖了
    case "DECREMENT":
      return { ...state, counter: state.counter - 1 }
    case "ADD_NUMBER":
      return { ...state, counter: state.counter + action.num }
    case "SUB_NUMBER":
      return { ...state, counter: state.counter - action.num }
    default:
      return state;
  }
}

// 2. store(创建的时候需要传入一个reducer)(reducer是一个函数...)
const store = redux.createStore(reducer)

// 订阅store的修改
store.subscribe(() => {
  console.log("counter:", store.getState().counter);
})

// 派发...actions
/*
* redux要求我们通过action来更新数据。所有的数据变化必须通过dispatch action来更新
* action是一个普通的javascript对象，用来描述这次更新的type和content
*
*
*/
const action1 = { type: "INCREMENT" }; // 自增
const action2 = { type: "DECREMENT" }; // 自减

const action3 = { type: "ADD_NUMBER", num: 5 }; // 每次加5
const action4 = { type: "SUB_NUMBER", num: 12 }; // 每次减12

// 派发action（也就是发布...） // 每一次dispatch之后的结果在subscribe中监听到
store.dispatch(action1); // 目的是加1
store.dispatch(action2); // 目的是减1
store.dispatch(action2); // 目的是减1
store.dispatch(action3); // 目的是加5
store.dispatch(action4); // 目的是减12

// 终端执行
// node basic_redux.js
// 把basic_redux.js抽到各个单独的文件里面
/*
* redux
* 1.reducer
* 2.action
* 3.dispatch
*
*
*
*/

