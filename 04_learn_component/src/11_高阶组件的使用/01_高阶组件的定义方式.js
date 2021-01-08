import React, { PureComponent } from 'react'
// App组件
class App extends PureComponent {
  render() {
    return (
      <div>
        App: {this.props.name}
      </div>
    )
  }
}
// name="why" 本质是传递给了NewComponent
/*function enhanceComponent(WrappedComponent) {
  class NewComponent extends PureComponent {
    render() {
      return <WrappedComponent {...this.props}/>
    }
  }

  NewComponent.displayName = "Kobe"; // 所有的组件都可以给他起个名字~~
  return NewComponent;
}*/
// 什么是高阶函数
// 什么是高阶组件(高阶组件不是一个组件，是一个函数)
// HOC就是高阶组件~~ enhance是增强的意思
// enhanceComponent2就是一个高阶组件
// 高阶函数，传递一个组件，返回一个新的组件
function enhanceComponent2(WrappedComponent) {
  function NewComponent(props) {
    console.log(props);
    // 对组件进行了"劫持"，相当于在这里做了劫持...
    return <WrappedComponent {...props}/>
  }

  // NewComponent.displayName = "Kobe";
  return NewComponent;
}

// EnhanceComponent是一个组件...
const EnhanceComponent = enhanceComponent2(App);

class Person{

}
console.dir(Person);
// 最后导出来的的是 EnhanceComponent，显示到页面上的根也是EnhanceComponent
export default EnhanceComponent;
/*
* 高阶组件并不是react本身自带的，而是一种结合特性而生成的一种设计模式
* 在一些第三方库中非常常见
* redux中的connect
* react-router中的withRouter
*
*
*/

