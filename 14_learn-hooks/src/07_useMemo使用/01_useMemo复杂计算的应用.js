import React, {useState, useMemo} from 'react';
/*
* useMemo，这个hook，实际的目的也是为了进行性能优化
*
*/
function calcNumber(count) {
  console.log("calcNumber重新计算");
  let total = 0;
  for (let i = 1; i <= count; i++) {
    total += i;
  }
  return total;
}

// 定义一个函数式组件
export default function MemoHookDemo01() {
  // 利用useState声明两个state
  const [count, setCount] = useState(10);
  const [show, setShow] = useState(true);
  // 1.如果不用useMemo  不用useMemo的话 show切换每次点击这个按钮的时候calcNumber这个方法都会执行
  // const total = calcNumber(count); 用了 calcNumber就不会执行
  // 2.使用useMemo
  // total 是什么呢，total是 return calcNumber(count)的结果
  const total = useMemo(() => {
    return calcNumber(count);
  }, [count]);

  return (
    <div>
      <h2>计算数字的和: {total}</h2>
      <button onClick={e => setCount(count + 1)}>+1</button>
      <button onClick={e => setShow(!show)}>show切换</button>
    </div>
  )
}
