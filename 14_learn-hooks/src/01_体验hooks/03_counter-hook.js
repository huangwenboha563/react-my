import React, {useState} from 'react';
/*
*  useState，官网上没见到里面传递一个方法啊。
*  好像真的是能传递一个方法
*
*
*/
export default function CounterHook() {
    const [count, setCount] = useState(() => 10);

    console.log("CounterHook渲染",count);

    function handleBtnClick() {
        /*
        *  setCount(count + 10); 执行四次只会走一次，如果要依赖上一次就必须传递一个函数过去了
        */
        // setCount(count + 10);
        // setCount(count + 10);
        // setCount(count + 10);
        // setCount(count + 10);
        setCount((prevCount) => prevCount + 10);
        setCount((prevCount) => prevCount + 10);
        setCount((prevCount) => prevCount + 10);
        setCount((prevCount) => prevCount + 10);
    }

    function addTen() {
        setCount((preCount)=>{
            return preCount + 10;
        })
        /* setCount(count)
        setCount(count+10) */
    }

    return (
        <div>
            <h2>当前计数: {count}</h2>
            {/*加1*/}
            <button onClick={e => setCount(count + 1)}>+1</button>
            {/*加10一次*/}
            {/*<button onClick={e => setCount((prevCount) => prevCount + 10)}>+10</button>*/}
            <button onClick={addTen}>+10(只加一次)</button>
            {/*加10多次*/}
            <button onClick={handleBtnClick}>+10（加四次想把四次合并成一次）</button>
            {/*减1*/}
            <button onClick={e => setCount(count - 1)}>-1</button>
        </div>
    )
}
