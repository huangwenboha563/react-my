import React, {useState, useReducer} from 'react';

import reducer from './reducer';
/*
*  useReducer又是一个新的hook
*  react也是逗比...reducer?这不是在学redux时候的一个api吗，怎么又在这里用这个单词，两者之间有什么关联吗？
*  useReducer是useState的一个替代方案
*  useReducer接收两个参数
*  param1，一个reducer
*  param2,初始值
*  如果你的页面state很简单，可以直接使用useState
*  如果你的页面state比较复杂（state是一个对象或者state非常多散落在各处）请使用userReducer
*  https://blog.dyboy.cn/program/177.html 
*  参考这篇文章
*/
export default function Home() {
    // const [count, setCount] = useState(0);
    const [state, dispatch] = useReducer(reducer, {counter: 0});

    // 方法定义在外面也可以，不一定非要在button上那种写在一行...
    function testAdd() {
        dispatch({type: "increment"})
    }

    return (
        <div>
            <h2>Home当前计数: {state.counter}</h2>
            {/*<button onClick={e => dispatch({type: "increment"})}>+1</button>*/}
            <button onClick={testAdd}>+1</button>
            <button onClick={e => dispatch({type: "decrement"})}>-1</button>
        </div>
    )
}
