import React, {useState, memo, useMemo} from 'react';
/*
* 不管37 21  只要是函数式组件,都用memo包裹起来。
* 这里memo包裹起来如果不用useMemo的话，也是会一直执行的，因为 const info = { name: "why", age: 18 }; 每次变化都会执行
* 每次传给组件的info都是一个新到的 info
*
*
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
    }, []); // []代表没有依赖任何东西

    return (
        <div>
            <HYInfo info={info}/>
            <button onClick={e => setShow(!show)}>show切换</button>
        </div>
    )
}
