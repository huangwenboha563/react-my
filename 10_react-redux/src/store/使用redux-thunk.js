/**
 * @author: hwb
 * @date: 2020-11-20 09:28
 * @description：
 * @update: 2020-11-20 09:28
 */

/*
*   1.为什么需要redux-thunk
*   2. compose是什么？
*   3. window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({trace:true})是什么
*   4. composeEnhancers(xxxxxx)   // xxxxxx
*/
import { createStore,applyMiddleware,compose} from 'redux';
import thunkMiddleware from "redux-thunk";
import reducer from './reducer.js';
// composeEnhancers函数
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
