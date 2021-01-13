import React from 'react';
import ReactDOM from 'react-dom';

// import axios from 'axios';

import App from './App';

// 7.默认配置,统一在service/下面的request.js里面去
// axios.defaults.baseURL = "https://httpbin.org";
// axios.defaults.timeout = 5000;
// axios.defaults.headers.common["token"] = "dafdafadfadfadfas"; // 不管是geit还是post都加token
// axios.defaults.headers.post["Content-Type"] = "application/text"; // 只有post才指定特殊的Content-Type

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
