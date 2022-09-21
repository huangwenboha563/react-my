import React, {useState, useEffect} from 'react'

export default function MultiEffectHookDemo() {
    const [count, setCount] = useState(0);
    const [isLogin, setIsLogin] = useState(true);
    // 只有count发生变化时才执行....，这样就提高了性能(ps:坚守了不必要的执行)
    useEffect(() => {
        console.log("修改DOM", count);
    }, [count]);
    // 传递一个空数组用来提高性能（如果不传递一个空数组，登录和注销来回切换的时候，console.log("订阅事件")会一直执行）
    useEffect(() => {
        console.log("订阅事件");
    },[]); 
    
    // 传递一个空数组用来提高性能（如果不传递一个空数组，登录和注销来回切换的时候，console.log("网络请求")会一直执行）
    // 如果传递一个空数组，只需要执行一次
    useEffect(() => {
        console.log("网络请求");
    },[]); 
    

    return (
        <div>
            <h2>MultiEffectHookDemo</h2>
            <h2>{count}</h2>
            {/* 点击+1的时候   console.log("修改DOM", count); 会一直执行，因为第二个参数传递了[count]*/}
            <button onClick={e => setCount(count + 1)}>+1</button>
            <h2>{isLogin ? "coderwhy" : "未登录"}</h2>
            <button onClick={e => setIsLogin(!isLogin)}>登录/注销</button>
        </div>
    )
}
