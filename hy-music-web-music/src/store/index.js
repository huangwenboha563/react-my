import { createStore, applyMiddleware, compose } from 'redux';
// 引入中间件，thunk是一个中间件，要用thunk的话就需要用到applyMiddleware。
import thunk from 'redux-thunk';
import reducer from './reducer';
// 如果安装了调试工具用调试工具，没有用默认的
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/*
* 创建store createStore,依赖redux
* reducer建议进行拆分
*
* composeEnhancers包裹一下，是为了让调试工具能调试
*/
/*
*  创建store的时候传递reducer，当然我们这个项目里面的reducer肯定需要拆分。
*  比如：推荐是一个reducer,排行榜是一个reducer,歌单是一个reducer....
*
*
*/
const store = createStore(reducer, composeEnhancers(
  applyMiddleware(thunk)
));

export default store; // store需要共享，在App.js里面去共享
