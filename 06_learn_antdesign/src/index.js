import React from 'react';
import ReactDOM from 'react-dom';
// moment的语言包可以选择繁体字了乱七八糟的
import 'moment/locale/zh-cn';
// 全局引入antd css
// import 'antd/dist/antd.css';
import 'antd/dist/antd.less';

// import App from './App';
import App from './comment/App';


ReactDOM.render(
  <App />,
  document.getElementById('root')
);
