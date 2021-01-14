import React, { PureComponent } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import './TransitionGroup.css';

export default class TransitionGroupDemo extends PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      names: ["coderwhy", "kobe", "lilei"]
    }
  }

  render() {
    return (
      <div>
        <TransitionGroup>
          {
            this.state.names.map((item, index) => {
              // 循环的时候必须添加一个唯一的key
              return (
                <CSSTransition key={item}
                  timeout={500}
                  classNames="item">
                  <div>
                    {item}
                    <button onClick={e => this.removeItem(index)}>-</button>
                  </div>
                </CSSTransition>
              )
            })
          }
        </TransitionGroup>
        <button onClick={e => this.addName()}>+name</button>
      </div>
    )
  }

  addName() {
    console.log('添加了')
    this.setState({
      // 如果 CSSTransition的key设置为item重复添加就会不生效
      // names: [...this.state.names, "coderwhy"+new Date().getTime()]
      names: [...this.state.names, "coderwhy"]
    })
  }

  removeItem(index) {
    // index indey indez
    // 还是遵循不可变的力量
    // this.state.names.filter((item, indey) => index !== indey)返回的是个新数组
    this.setState({
      names: this.state.names.filter((item, indey) => index !== indey)
    })
  }
}
