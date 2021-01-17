// 1.手动和redux联系

/*import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);*/




// 2.用自定义的connect函数减少重复代码
/*
* 关于context如何使用，翻看跨组件通信那一节
* 自定义封装 connect 需要用到 context,高阶组件（高阶函数）相关的知识....可以先绕过，直接看react-redux给我们提供的用法
*
*/
/* import React from 'react';
import ReactDOM from 'react-dom';
import store from "./store/自定义connect";
import { StoreContext} from "./utils/context";
import App from './App';

ReactDOM.render(
    <StoreContext.Provider value={store}>
        <App></App>
    </StoreContext.Provider>,
    document.getElementById('root')
);
 */



// 3.上面是通过自己封装的connect，利用context里面的Provider
// 用第三方库react-redux，自带connect方法和Provider
 import React from 'react';
import ReactDOM from 'react-dom';
import store from "./store/第三方connect";
import { Provider} from "react-redux";
import App from './App';
ReactDOM.render(
    <Provider store={store}>
        <App></App>
    </Provider>,
    document.getElementById('root')
);



// 4.使用redux-thunk
// import React from 'react';
// import ReactDOM from 'react-dom';
// import store from "./store/使用redux-thunk";
// import { Provider} from "react-redux";
// import App from './App';
// ReactDOM.render(
//     <Provider store={store}>
//         <App></App>
//     </Provider>,
//     document.getElementById('root')
// );





// 5.使用redux-saga
/* import React from 'react';
import ReactDOM from 'react-dom';
import store from "./store";
import { Provider} from "react-redux";
import App from './App';
ReactDOM.render(
    <Provider store={store}>
        <App></App>
    </Provider>,
    document.getElementById('root')
); */
/*
* 补充：
* import store from "./store";
* import { Provider} from "react-redux";这个操作本质上就是利用context传递state，有的人喜欢把这一步骤放在App.js中
* 总之放在最顶层就可以了
*
*
* */