// node环境中这样导入，webpack环境中 import {} from
import redux from 'redux';

import reducer from './reducer.js';

const store = redux.createStore(reducer);

export default store;
