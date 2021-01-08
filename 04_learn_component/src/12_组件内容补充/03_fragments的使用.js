import React, { PureComponent, Fragment } from 'react';

export default class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      friends: [
        {name: "why", age: 18},
        {name: "lilei", age: 20},
        {name: "kobe", age: 25},
      ]
    }
  }

  render() {
    return (
        /*短语法...就是<Fragment></Fragment>的简写，但是如果要加key等属性，就不能用简写了*/
      <>
        <h2>当前计数: {this.state.counter}</h2>
        <button onClick={e => this.increment()}>+1</button>
        <div>
          {
            this.state.friends.map((item, index) => {
              return (
                  /*key，为了提高性能*/
                <Fragment key={item.name}>
                  <div>{item.name}</div>
                  <p>{item.age}</p>
                  <hr/>
                </Fragment>
              )
              // 如果不用fragement，return出来的jsx就必须在最外层加一个div包裹。如果不想要这个div就需要用Fragement来包裹...,这样页面里面就没有无意义的专门套的那个标签了。
              /*return (
                  <div>
                    <div>{item.name}</div>
                    <p>{item.age}</p>
                    <hr/>
                  </div>
              )*/

            })
          }
        </div>
      </>
    )
  }

  increment() {
    this.setState({
      counter: this.state.counter + 1
    })
  }
}
