import React, { PureComponent, createContext } from 'react';

// 定义一个高阶组件
function withUser(WrappedComponent) {
  return props => {
    return (
      <UserContext.Consumer>
        {
          user => {
            return <WrappedComponent {...props} {...user}/>
          }
        }
      </UserContext.Consumer>
    )
  }
}

// 创建Context
const UserContext = createContext({
  nickname: "默认",
  level: -1,
  区域: "中国"
});

class Home extends PureComponent {
  render() {
    return <h2>Home: {`昵称: ${this.props.nickname} 等级: ${this.props.level} 区域:  ${this.props.region}`}</h2>
  }
}


class About extends PureComponent {
  render() {
    return <h2>About: {`昵称: ${this.props.nickname} 等级: ${this.props.level} 区域: ${this.props.region}`}</h2>
  }
}

class Detail extends PureComponent {
  render() {
    return (
      <ul>
        <li>{this.props.nickname}</li>
        <li>{this.props.level}</li>
        <li>{this.props.region}</li>
      </ul>
    )
  }
}


const UserHome = withUser(Home);
const UserAbout = withUser(About);
const UserDetail = withUser(Detail);

class App extends PureComponent {
  render() {
    return (
      <div>
        App
        <UserContext.Provider value={{nickname: "why", level: 90, region: "中国"}}>
          <UserHome a='1'/>
          <UserAbout/>
          <UserDetail/>
        </UserContext.Provider>
      </div>
    )
  }
}

export default App;
/*
*   增强版和默认版功能是一样的都是利用context给需要共享的组件传递数据 ，但是默认版本的话
*   home，about，还有其他组件里面都需要xxxx.consumer。看起来很乱..
*   用高阶组件实现的话，在一个地方consumer就可以了。只要能找到创建出来的UserContext在哪都可以去消费...
*
*
*
*/

