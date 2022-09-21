import React, {useState, useCallback, memo} from 'react';

/**
 * useCallback在什么时候使用?
 * 场景: 在将一个组件中的函数, 传递给子元素进行回调使用时, 使用
 * useCallback
 * 对函数进行处理.
 */
/*
* memo？我草...又忘记了，为什么将HYButton用memo包裹起来
* memo是为了性能优化而用的的和 PureComponent作用一样，PureComponent是类组件 memo是函数式组件
* memo包裹对btn1不起作用了，对btn2起作用
*/
const HYButton = memo((props) => {
    console.log("HYButton重新渲染: " + props.title);
    return <button onClick={props.increment}>HYButton +1</button>
});


/* 
https://blog.csdn.net/weixin_43720095/article/details/104965398
*/
export default function CallbackHookDemo02() {
    console.log("CallbackHookDemo02重新渲染");

    const [count, setCount] = useState(0);
    const [show, setShow] = useState(true);

    /* const increment1 = useCallback(() => {
        console.log("执行increment1函数");
        setCount(count + 1);
    },[count]) */
    const increment1 =() => {
        console.log("执行increment1函数");
        setCount(count + 1);
    }
    const increment2 = useCallback(() => {
        console.log("执行increment2函数");
        setCount(count + 1);
    }, [count]);

    return (
        <div>
            <h2>CallbackHookDemo01: {count}</h2>
            {/* <button onClick={increment1}>+1</button><button onClick={increment2}>+1</button> */}
            <HYButton title="btn1" increment={increment1}/><br/>
            <hr/>
            <HYButton title="btn2" increment={increment2}/><br/>
            {/*
            show来回切换的时候CallbackHookDemo02肯定会执行重新渲染，子组件也会重新渲染，但是show发生切换理论上和button没关系的，
            性能优化体现在哪里呢？
            点击show来回切换的时候。
            理论上来说和HYButton是没有半毛钱关系的，
            但是...increment1没有用useCallback    HYButton重新渲染: btn1控制台会打印这个 HYButton重新渲染: btn1
            increment2用了useCallback 但是不会打印 HYButton重新渲染: btn2
            */}
            <button onClick={e => setShow(!show)}>show切换</button>
        </div>
    )
}
/*
* 总结useMemo和useCallback都是用来做性能优化的....
* useMemo缓存的是 一个 state结果
* useCallback缓存的是一个方法
*/
