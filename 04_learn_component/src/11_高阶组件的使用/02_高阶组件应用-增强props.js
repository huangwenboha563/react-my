import React, { PureComponent } from 'react';

// 定义一个高阶组件
function enhanceRegionProps(WrappedComponent,another) {
  // 在这里做了劫持~~~~~,增加了一个region,想要增加一个region的话，就不用动原来的，在这里统一加就可了。
  return props => {
    return <WrappedComponent {...props} {...another} region="中国"/>
  }
}

class Home extends PureComponent {
  render() {
    return <h2>Home: {`昵称: ${this.props.nickname} 等级: ${this.props.level} 区域: ${this.props.region} 喜欢: ${this.props.like}`} </h2>
  }
}


class About extends PureComponent {
  render() {
    return <h2>About: {`昵称: ${this.props.nickname} 等级: ${this.props.level} 区域: ${this.props.region} 喜欢: ${this.props.like}`}</h2>
  }
}

// EnhanceHome组件 enhanceRegionProps是高阶组件 redux中connect的返回值是一个函数，这个函数可以看作是高阶组件。
const otherProps = {
  like:'科比'
}
const otherPropsEcond = {
  like:'艾弗森'
}
const EnhanceHome = enhanceRegionProps(Home,otherProps);
// EnhanceAbout也是组件
const EnhanceAbout = enhanceRegionProps(About,otherPropsEcond);

class App extends PureComponent {
  render() {
    return (
      <div>
        App
        <EnhanceHome nickname="coderwhy" level={90}/>
        <EnhanceAbout nickname="kobe" level={99}/>
      </div>
    )
  }
}

export default App;

