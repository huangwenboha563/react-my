import React, {useState, useCallback, useMemo} from 'react'
/*
* useCallback会返回一个函数的memoized(记忆)的值
* 在依赖不变的情况下，多次定义的时候返回的值是相同的
*/
export default function CallbackHookDemo01() {
    const [count, setCount] = useState(0);
    // 点击加1的时候 increment1，都会被创新定义一次
    const increment1 = () => {
        console.log("执行increment1函数");
        setCount(count + 1);
    }

    const increment2 = useCallback(() => {
        console.log("执行increment2函数");
        setCount(count + 1);
    }, [count]);
    // useMemo 来模拟useCallback， useCallback其实是useMemo的语法糖
    const increment3 = useMemo(() => {
        return () => {
            console.log("执行increment3函数");
            setCount(count + 1);
        }
    }, [count]);
    /* 
    CallbackHookDemo01只要数据发生变化这个组件就会重新render
    */
    return (
        <div>
            <h2>CallbackHookDemo01: {count}</h2>
            <button onClick={increment1}>+1</button>
            <button onClick={increment2}>+1</button>
            <button onClick={increment3}>+1</button>
        </div>
    )
}
