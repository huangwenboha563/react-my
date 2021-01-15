/**
 * @author: hwb
 * @date: 2020-11-20 09:28
 * @description：
 * @update: 2020-11-20 09:28
 */

/*
*   1.为什么需要redux-thunk
*   2. compose是什么？
*   3. window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({trace:true})是什么chrome安装完redux插件以后就会出现在window上添加这个属性
*   4. composeEnhancers(xxxxxx)   // xxxxxx
*/
import { createStore,applyMiddleware,compose} from 'redux';
import thunkMiddleware from "redux-thunk";
import reducer from './reducer.js';
// composeEnhancers函数 trace设置为true，可以在redux工具中看到trace这个选项可以更好的跟踪数据的变化。
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({trace:true}) || compose;
// 应用一些中间件 applyMiddleware(中间1，中间2);
const storeenhancer = applyMiddleware(thunkMiddleware);
// 传入第二个参数

const store = createStore(reducer,composeEnhancers(storeenhancer));
export default store;

/*
*   redux-saga
*   需要熟悉generator用法
*
*
*/
