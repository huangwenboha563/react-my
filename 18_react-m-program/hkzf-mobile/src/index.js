import React from 'react';
import ReactDOM from 'react-dom';
// 全局 导入antd-mobile的样式
import 'antd-mobile/dist/antd-mobile.css'
// 我们自己样式放在antd-mobile的后面
import './index.css';
// 导入字体图标库
import './assets/fonts/iconfont.css'
// 导入 react-virtualized的样式
import 'react-virtualized/styles.css';
// 应该将组件导入放在最后避免样式覆盖
import App from './App';

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

