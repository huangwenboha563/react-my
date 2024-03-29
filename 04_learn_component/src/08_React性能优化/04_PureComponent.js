// import React, { PureComponent ,Component} from 'react';
import React, { PureComponent} from 'react';

// Header
function Header() {
  console.log("Header被调用");
  return <h2>我是Header组件</h2>
}

// Main里面的banner
class Banner extends PureComponent {
  render() {
    console.log("Banner render函数被调用");
    return <h3>我是Banner组件</h3>
  }
}

function ProductList() {
  console.log("ProductList被调用");
  return (
    <ul>
      <li>商品列表1</li>
      <li>商品列表2</li>
      <li>商品列表3</li>
      <li>商品列表4</li>
      <li>商品列表5</li>
    </ul>
  )
}

// Main组件  // 测试：如果把Main的 PureComponent换成Component
class Main extends PureComponent {
  render() {
    console.log("Main render函数被调用");
    return (
        /*Main里面套着banner和list*/
      <div>
        <Banner/>
        <ProductList/>
      </div>
    )
  }
}

// Footer
function Footer() {
  console.log("Footer被调用");
  return <h2>我是Footer组件</h2>
}

// 根组件
export default class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    }
  }

  render() {
    console.log("App render函数被调用");
    return (
      <div>
        <h2>当前计数: {this.state.counter}</h2>
        <button onClick={e => this.increment()}>+1</button>
        <Header/>
        <Main/>
        <Footer/>
      </div>
    )
  }

  increment() {
    this.setState({
      counter: this.state.counter + 1
    })
  }
}
/*
*  总结:
*  03_shouldComponentUpdate,利用shouldComponentUpdate这个钩子函数来提高性能
*  04_PureComponent,利用自带的PureComponent来提高性能，PureComponent只能用在类组件上
*  05_memo，为什么要memo，如果是类组件我们可以用PureComponent来提高性能。如果是函数式组件呢，就需要用memo包裹一下了。没有什么为什么，就是语法糖而已
*  总之为了减少没有必要的render，class组件都用PureComponent
*  减少不必要的render！！！！！
*  更高级别的优化immutable
*
*/
