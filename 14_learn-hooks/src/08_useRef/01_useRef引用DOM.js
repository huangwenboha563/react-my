import React, { useEffect, useRef ,forwardRef } from 'react';


/* 
韩式是组件中不能用之前的ref的三种方式吗。1.字符串 2.箭头函数  3.回调



*/
/*
*  除了以前说的那集中获取ref的方式以为，新增了一个useRef
*  使用场景：
*  1.应用dom元素
*  2.引用组件（必须是class组件）
*
*/
/* 类组件 */
class TestCpn extends React.Component {
  render() {
    return <h2>TestCpn</h2>
  }
}

/* function TestCpn2(props) {
  return <h2>TestCpn2</h2>
} */

const TestCpn2 = forwardRef((props,ref) => {
  return <h2 ref={ref}>TestCpn2</h2>
})


export default function RefHookDemo01() {

  const titleRef = useRef();
  const inputRef = useRef();
  const testRef = useRef();
  const testRef2 = useRef();

  function changeDOM() {
    titleRef.current.innerHTML = "Hello World";
    inputRef.current.focus();
    console.log(testRef.current);
    console.log(testRef2);
  }

  return (
    <div>
      <h2 ref={titleRef}>RefHookDemo01</h2>
      <input ref={inputRef} type="text"/>
      <TestCpn ref={testRef}/>
      <TestCpn2 ref={testRef2}/>
      {/*
      TestCpn2是函数式组件不能用ref函数式组件没有this，如果用了控制太会报错warning--借助React.fowardref
      可以看组件的内容补充那一章节
      fowardref是一个高阶组件...
      */}

      <button onClick={e => changeDOM()}>修改DOM</button>
    </div>
  )
}
