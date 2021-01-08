import React from 'react';
import ReactDOM from 'react-dom';
// 全局样式（reset.css里面包括normalize 和自己定义的） @/代表的是src目录
import "@/assets/css/reset.css";
// 根组件
import App from './App';
// ReactDOM渲染
// 不使用严格模式
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
