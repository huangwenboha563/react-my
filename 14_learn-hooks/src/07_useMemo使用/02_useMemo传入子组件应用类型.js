import React, {useState, memo, useMemo} from 'react';
/*
* 不管37 21  只要是函数式组件,都用memo包裹起来。
* 这里memo包裹起来如果不用useMemo的话，也是会一直执行的，因为 const info = { name: "why", age: 18 }; 每次变化都会执行
* 每次传给组件的info都是一个新到的 info
*/
const HYInfo = memo((props) => {
    console.log("HYInfo重新渲染");
    return <h2>名字: {props.info.name} 年龄: {props.info.age}</h2>
});

export default function MemoHookDemo02() {
    console.log("MemoHookDemo02重新渲染");
    const [show, setShow] = useState(true);

    // const info = { name: "why", age: 18 };
    const info = useMemo(() => {
        return {name: "why", age: 18};
    }, []); // []代表没有依赖任何东西 // 用useMemo一包裹 这个info状态就缓存下来

    return (
        <div>
            <HYInfo info={info}/>
            <button onClick={e => setShow(!show)}>show切换</button>
        </div>
    )
}

// useMemo 和 useCallback 接收的参数都是一样,第一个参数为回调 第二个参数为要依赖的数据

// 共同作用：
// 1.仅仅 依赖数据 发生变化, 才会重新计算结果，也就是起到缓存的作用。

// 两者区别：
// 1.useMemo 计算结果是 return 回来的值, 主要用于 缓存计算结果的值 ，应用场景如： 需要 计算的状态
// 2.useCallback 计算结果是 函数, 主要用于 缓存函数，应用场景如: 需要缓存的函数，因为函数式组件每次任何一个 state 的变化 整个组件 都会被重新刷新，一些函数是没有必要被重新刷新的，此时就应该缓存起来，提高性能，和减少资源浪费。

