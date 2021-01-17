import React, { PureComponent } from 'react';

function withProps(WrappedComponent) {
  // 在这里做了劫持~~~~~
  return props => {
    return <WrappedComponent {...props} region="中国" />
  }
}

function withRenderTime(WrappedComponent) {
  return class extends PureComponent {
    // 即将渲染获取一个时间 beginTime
    UNSAFE_componentWillMount() {
      this.beginTime = Date.now();
    }

    // 渲染完成再获取一个时间 endTime
    componentDidMount() {
      this.endTime = Date.now();
      const interval = this.endTime - this.beginTime;
      // WrappedComponent.name,所有类都有一个名字
      console.log(`${WrappedComponent.name}渲染时间: ${interval}`)
    }

    render() {
      return <WrappedComponent {...this.props} />
    }
  }
}

class Home extends PureComponent {
  render() {
    return (
      <div>
        <h2>Home</h2>
        <h3>{this.props.realName}</h3>
        <h3>我是装饰器写法----{this.props.region}</h3>
      </div>
    )

  }
}


class About extends PureComponent {
  render() {
    return (
      <div>
        <h2>About</h2>
        <h3>{this.props.realName}</h3>
      </div>
    )
  }
}



@withRenderTime
@withProps
// const TimeHome = withRenderTime(with©rops(Home));
// const TimeHome = Home;

// const TimeAbout = withRenderTime(About);

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Home realName="我是home" />
        <About realName="我是about" />
      </div>
    )
  }
}

class Person {

}

/*
* react里面怎么这么麻烦呢，有hooks关于this的问题就简单多了。
* 那是不是直接学hooks就可以呢，不是。因为有的老项目还是这种方式做的，慢慢来吧...
* 高阶组件都是为了redux中国呢的connect那一部分做铺垫
* 利用高阶组件减少了很多代码，公共的那两个生命周期函数不用写两遍了...
*/
console.log(Person.name);
