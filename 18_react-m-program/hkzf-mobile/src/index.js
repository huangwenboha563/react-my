import React from 'react';
import ReactDOM from 'react-dom';
// 全局 导入antd-mobile的样式
import 'antd-mobile/dist/antd-mobile.css'
// 我们自己样式放在antd-mobile的后面
import './index.css';
import App from './App';
// 导入字体图标库
import './assets/fonts/iconfont.css'
ReactDOM.render(
    <App />,
  document.getElementById('root')
);

