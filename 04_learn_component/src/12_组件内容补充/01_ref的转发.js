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

export default class App extends PureComponent {
  constructor(props) {
    super(props);

    this.titleRef = createRef();
    this.homeRef = createRef();
    this.profileRef = createRef();
  }

  render() {
    return (
      <div>
        <h2 ref={this.titleRef}>Hello World</h2>
        <Home ref={this.homeRef}/>

        <Profile ref={this.profileRef} name={"why"}/>

        <button onClick={e => this.printRef()}>打印ref</button>
      </div>
    )
  }

  printRef() {
    console.log(this.titleRef.current);
    console.log(this.homeRef.current);
    console.log(this.profileRef.current); // 组件里面的那个p元素
  }
}
/*
*  一句话总结ref的转发
* Profile 如果是函数式组件的话，不能给ref属性.....,所以必须用 forwardRef包裹一下
*
*/
