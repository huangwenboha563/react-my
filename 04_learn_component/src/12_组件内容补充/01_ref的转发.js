import React, { PureComponent, createRef, forwardRef } from 'react';

// 注意这里是个类组件
class Home extends PureComponent {
  render() {
    return <h2>Home</h2>
  }
}

// 高阶组件forwardRef
const Profile = forwardRef(function(props, ref) {
  return <p ref={ref}>Profile---{props.name}</p>
})


const Test= (props) => {
  return (
    <div>我了个去...</div>
  )
}


export default class App extends PureComponent {
  constructor(props) {
    super(props);

    this.titleRef = createRef();
    this.homeRef = createRef();
    this.profileRef = createRef();
    this.testRef = createRef();
  }

  render() {
    return (
      <div>
        <h2 ref={this.titleRef}>Hello World</h2>
        <Home ref={this.homeRef}/>
        {/* Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?*/}
        {/* 如果直接给一个函数组件加ref会报错.... */}
         <Test ref={this.testRef}></Test>
        <Profile ref={this.profileRef} name={"why"}/>

        <button onClick={e => this.printRef()}>打印ref</button>
      </div>
    )
  }

  printRef() {
    // 获取都的是h2标签
    console.log(this.titleRef.current);
    // 获取到的是组件实例
    console.log(this.homeRef.current);
    // console.log(this.testRef);
    // 获取到的是函数组件里面的那个p元素
    console.log(this.profileRef.current); // 组件里面的那个p元素
  }
}
/*
*  一句话总结ref的转发
* Profile 如果是函数式组件的话，不能给ref属性.....,所以必须用 forwardRef包裹一下
*
*/

/**/
