

import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
// createSagaMiddleware是一个函数
import createSagaMiddleware from 'redux-saga';

import saga from './saga';
import reducer from './reducer.js';

// composeEnhancers函数
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({trace: true}) || compose;

// 应用一些中间件
// 1.引入thunkMiddleware中间件(上面)
// 2.创建sagaMiddleware中间件
const sagaMiddleware = createSagaMiddleware();

// applyMiddleware可以应用很多中间件
const storeEnhancer = applyMiddleware(thunkMiddleware, sagaMiddleware);
const store = createStore(reducer, composeEnhancers(storeEnhancer));
// 需要跑起来，可以拦截一些action，到底需要对哪些action拦截呢？就是saga saga是一个生成器函数
sagaMiddleware.run(saga);

export default store;
