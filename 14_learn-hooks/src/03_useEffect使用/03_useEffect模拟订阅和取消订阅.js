import React, {useEffect, useState} from 'react'

export default function EffectHookCancelDemo() {
    /*
    *  
    * 如果你熟悉 React class 的生命周期函数，
    * 你可以把 useEffect Hook 
    * 看做 componentDidMount，componentDidUpdate 和 componentWillUnmount 这三个函数的组合。
    * 函数组件中没有生命周期，我们可以用useEffect来替代
    * 参考url
    * https://www.jianshu.com/p/6e525c3686ab  这篇文章对这个useEffect的介绍
    */
    const [count, setCount] = useState(0);
    /*最主要的useEffect传递第二个参事*/
    useEffect(() => {
        // 假设这里有个定时器....（相当于在componentDidMount开启这个定时器，在这里写的代码setCount执行的时候是不会执行的）
        console.log("订阅一些事件"); // 初始化的时候会执行订阅

        return () => {
            // 需要在组件的时候做些事情，写在这里。同时第二个参数必须是[]
            // 可以有多个useEffect
            // 上面的定时器需要在这里清除（相当于在componentWillUnmount（卸载这个定时器））
            console.log("取消订阅事件") // 该组件销毁的时候会执行这个return出来的方法
        }
    }, []); 
    // 第二个参数是一个数组，是用来做性能优化的
    // 第二个参数传递一个空数组表示：这就告诉 React 你的 effect 不依赖于 props 或 state 中的任何值，所以它永远都不需要重复执行。
    // 第二个参数如果传递一个[count] //意思是count发生变化时候才执行 console.log("订阅一些事件");  console.log("取消订阅事件")这种代码


    return (
        <div>
            <h2>EffectHookCancelDemo</h2>
            <h2>{count}</h2>
            <button onClick={e => setCount(count + 1)}>+1</button>
        </div>
    )
}
