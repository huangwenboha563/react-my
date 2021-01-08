import React, { PureComponent, StrictMode } from 'react';

class Home extends PureComponent {
  constructor(props) {
    super(props);
    // 严格模式下这里会打印出两个console.log
    console.log("home constrcutor");
  }
  // 在严格模式下UNSAFE_componentWillMount控制台也会报错...官方已经不建议使用了...,(识别不安全的生命周期)
  // UNSAFE_componentWillMount() {
  //   console.log("home componentWillMount");
  // }

  render() {
    return (
      <div ref="title">
        Home
      </div>
    )
  }
}

class Profile extends PureComponent {
  constructor(props) {
    super(props);

    console.log("profile constructor");
  }

  // UNSAFE_componentWillMount() {
  //   console.log("profile componentWillMount");
  // }

  render() {
    return (
      <div ref="title">
        Profile
      </div>
    )
  }
}

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <StrictMode>
          <Home/>
        </StrictMode>
        <Profile/>
      </div>
    )
  }
}
/*
* 给Home组件增加了严格模式，控制台就报错了。提示这种使用ref的方式已经快被淘汰了....,官方已经不建议这样使用ref了
*
*
*/
