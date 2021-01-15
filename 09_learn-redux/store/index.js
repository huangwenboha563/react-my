// node环境中这样导入，webpack环境中 import {} from
import redux from 'redux';
// reducer单独提取出来
import reducer from './reducer.js';

const store = redux.createStore(reducer);

export default store;
