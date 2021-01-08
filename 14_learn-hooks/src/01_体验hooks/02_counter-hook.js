import React, { useState } from 'react';
/*
*  useState这个hook，就是一个函数，来自react
*/
export default function CounterHook() {
  /**
   * Hook: useState
   *  > 本身是一个函数, 来自react包
   *  > 参数和返回值
   *    1.参数: 作用是给创建出来的状态一个默认值
   *    2.返回值: 数组
   *      * 元素1: 当前state的值
   *      * 元素2: 设置新的值时,使用的一个函数
   *    var [state,setState] = useState()
   *    setState 可以是任意的名字
   * 
   */
  // 传递一个0进去代表初始值是0
  const arr = useState(0);
  // 第一个参数
  const state = arr[0];
  // 第二个是个函数
  const setState = arr[1];
  function addOne () {
      setState(state+1)
  }
  return (
    <div>
      <h2>当前计数: {state}</h2>
      {/*<button onClick={e => setState(state + 1)}>+1</button>*/}
      <button onClick={addOne}>+1</button>
      <button onClick={e => setState(state - 1)}>-1</button>
    </div>
  )
}
