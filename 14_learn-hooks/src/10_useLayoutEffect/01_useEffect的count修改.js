import React, {useState, useEffect} from 'react'
/*
*  useEffect会在渲染的内容更新到DOM上后执行...,不会阻塞DOM的更新
*  useLayoutEffect会在渲染的内容更新到dom上之前执行，会阻塞dom的更新
*
*
*
*/
export default function EffectCounterDemo() {
    const [count, setCount] = useState(10);
    /*99%场景用这个就可以*/
    useEffect(() => {
        if (count === 0) {
            setCount(Math.random() + 200)
        }
    }, [count]);

    return (
        <div>
            <h2>数字: {count}</h2>
            {/*先显示0，再显示200多*/}
            <button onClick={e => setCount(0)}>修改数字</button>
        </div>
    )
}
