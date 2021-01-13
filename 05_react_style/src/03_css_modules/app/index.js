import React, { PureComponent } from 'react';

import appStyle from './style.module.scss';

import Home from '../home';
import Profile from '../profile';

export default class App extends PureComponent {
  render() {
    return (
      <div id="app">
        App
        <h2 className={appStyle.title}>我是App的title</h2>
        {/*缺陷 如果类名不是title  是title-my-box 不支持这种,类名不能有-*/}
        <Home/>
        <Profile/>
      </div>
    )
  }
}
